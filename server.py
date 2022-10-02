import json
from unicodedata import category
from colorama import Cursor
from flask import Flask, Response, abort, request
from about_me import me
from mock_data import catalog
from config import db
from bson import ObjectId
from flask_cors import CORS
from pymongo import MongoClient
# import yaml


app = Flask("reactstore")
CORS(app)


@app.route("/")
def home():
    return "home page test"

##################################


@app.route('/users', methods=['POST', 'GET'])
def data():

    # POST a data to database
    if request.method == 'POST':
        body = request.json
        firstName = body['firstName']
        lastName = body['lastName']
        emailId = body['emailId']
        # db.users.insert_one({
        db['users'].insert_one({
            "firstName": firstName,
            "lastName": lastName,
            "emailId": emailId
        })
        return jsonify({
            'status': 'Data is posted to MongoDB!',
            'firstName': firstName,
            'lastName': lastName,
            'emailId': emailId
        })

    # GET all data from database
    if request.method == 'GET':
        allData = db['users'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            firstName = data['firstName']
            lastName = data['lastName']
            emailId = data['emailId']
            dataDict = {
                'id': str(id),
                'firstName': firstName,
                'lastName': lastName,
                'emailId': emailId
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)


@app.route('/users/<string:id>', methods=['GET', 'DELETE', 'PUT'])
def onedata(id):

    # GET a specific data by id
    if request.method == 'GET':
        data = db['users'].find_one({'_id': ObjectId(id)})
        id = data['_id']
        firstName = data['firstName']
        lastName = data['lastName']
        emailId = data['emailId']
        dataDict = {
            'id': str(id),
            'firstName': firstName,
            'lastName': lastName,
            'emailId': emailId
        }
        print(dataDict)
        return jsonify(dataDict)

    # DELETE a data
    if request.method == 'DELETE':
        db['users'].delete_many({'_id': ObjectId(id)})
        print('\n # Deletion successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is deleted!'})

    # UPDATE a data by id
    if request.method == 'PUT':
        body = request.json
        firstName = body['firstName']
        lastName = body['lastName']
        emailId = body['emailId']

        db['users'].update_one(
            {'_id': ObjectId(id)},
            {
                "$set": {
                    "firstName": firstName,
                    "lastName": lastName,
                    "emailId": emailId
                }
            }
        )

        print('\n # Update successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is updated!'})


if __name__ == '__main__':
    app.debug = True
    app.run()

##################################


@app.route("/about")
def about():
    return me["first"] + " " + me["last"]


@app.route("/myaddress")
def address():
    return f'{me["address"]["street"]} #{me["address"]["number"]}'


# API ENDPOINTS

@app.route("/api/catalog", methods=['GET'])
def get_catalog():
    results = []
    cursor = db.products.find({})

    for prod in cursor:
        prod["_id"] = str(prod["_id"])
        results.append(prod)

    return json.dumps(results)


@app.route("/api/catalog", methods=["POST"])
def save_product():
    try:
        product = request.get_json()
        errors = ""

        if not "title" in product or len(product["title"]) < 5:
            errors = "Title is required and should have at least 5 characters"

        if not "image" in product:
            errors += ", Image is required"

        if not "price" in product or product["product"] < 1:
            errors += ", Price is required and should be >= 1"

        if errors:
            return (500, "Unexpected error")

        db.products.insert_one(product)
        product["_id"] = str(product["_id"])

        return json.dumps(product)

    except Exception as ex:
        return abort(500, F"Unexpected error: {ex}")


#################################################


@app.route("/api/catalog/count", methods=['GET'])
def get_count():
    cursor = db.products.find({})
    num_items = 0
    for prod in cursor:
        num_items += 1

    return json.dumps(num_items)


@app.route("/api/product/<id>", methods=['GET'])
def get_product(id):
    try:
        if not ObjectId.is_valid(id):
            return abort(400, "Invalid id")

        product = db.products.find_one({"_id": ObjectId(id)})

        if not product:
            return abort(404, "Product not found")

        product["_id"] = str(product["_id"])
        return json.dumps(product)

    except:
        return abort(500, "Unexpected error")


@app.route("/api/catalog/total", methods=['GET'])
def get_total():
    total = 0
    cursor = db.products.find({})
    for prod in cursor:
        # total = total + prod["price"]
        total += prod["price"]

    return json.dumps(total)

# Get product by category


@app.route("/api/catalog/<category>")
def products_by_category(category):
    results = []
    cursor = db.products.find({"category": category})

    for prod in catalog:
        prod["_id"] = str(prod["_id"])
        results.append(prod)

    return json.dumps(results)


@app.route("/api/categories")
def get_unique_categories():
    cursor = db.products.find({})

    results = []
    for prod in cursor:
        cat = prod["category"]
        if not cat in results:
            results.append(cat)

    return json.dumps(results)


@app.get("/api/product/cheapest")
def get_cheapest_product():
    cursor = db.products({})
    solution = catalog[0]
    for prod in catalog:
        if prod["price"] < solution["price"]:
            solution = prod

    solution["_id"] = str(solution["_id"])
    return json.dumps(solution)

# COUPON CODES


@app.route("/api/coupons", methods=["POST"])
def save_coupon():
    coupon = request.get_json()
    try:

        if not "code" in coupon or len(coupon["code"]) < 5:
            errors += "Coupon should have at least 5 characters"

        if not "discount" in coupon or coupon["discount"] < 1 or coupon["discount"] > 50:
            error += "Discount is required and should be 1-50"

        if errors:
            return Response(errors, status=400)

        exists = db.coupons.find_one({"code": coupon["code"]})
        if exists:
            # return abort(400, "A coupon exists for that code")
            return Response("A coupon already exists for that code", status=400)

        db.products.insert_one(coupon)

        coupon["_id"] = str(coupon["_id"])
        return json.dumps(coupon)

    except Exception as ex:
        print(ex)
        return Response("Unexpected error", status=500)

 #########################################################


@app.route("/api/coupons", methods=['GET'])
def get_all_coupon():
    results = []
    cursor = db.coupon.find({})

    for cc in cursor:
        cc["_id"] = str(cc["_id"])
        results.append(cc)

    return json.dumps(results)

###########################################################


@app.route("/api/coupons/code")
def coupons_by_code(category):
    results = []
    cursor = db.cc.find({"coupons": cc})

    for cc in coupons:
        cc["_id"] = str(cc["_id"])
        results.append(cc)

    return json.dumps(results)


@app.route("/api/coupons/<code>", methods=["Get"])
def get_coupon_by_code(code):

    coupon = db.coupons.find_one({"code": code})
    if not coupon:
        return abort(404, "Coupon not found")

    coupon["_id"] = str(coupon["_id"])
    return json.dumps(coupon)


app.run(debug=True)


# venv\Scripts\activate
# py server.py
