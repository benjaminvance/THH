import pymongo
import certifi

con_str = "mongodb+srv://benvance:benvance@cluster0.yhiym.mongodb.net/test"

client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())

db = client.get_database("TheHolisticHub")
