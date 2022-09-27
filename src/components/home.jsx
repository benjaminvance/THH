import { Container } from "./FooterStyles";
import "./home.css";


const Home = () => {
    const addToCart = (item) => {
        console.log("Hello");
    };
    return (
        <div className="home-page">
            <h1 class="home-title">Welcome to TheHolisticHub!</h1>
            <div>

            </div>
            <h3>Explore Below</h3>
            <div class="card-group">
                <div class="card">
                    <img src="/img/chaga.webp" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Chaga</h5>
                        <p class="card-text">Chaga is believed to have potent antioxidant and anti-inflammatory properties, making it a potential alternative remedy for things like arthritis and high blood pressure. It may also help lower blood sugar and even slow the progression of cancer cells. Chaga may also help: Ease inflammation.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="/img/goldenteacher.jpeg" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Golden Teacher</h5>
                        <p class="card-text">Psilocybin is know to help with depression, anxiety, PTSD, and head ache. </p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="/img/reishi.jpeg" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Reishi</h5>
                        <p class="card-text">Reishi mushroom has been used to help enhance the immune system, reduce stress, improve sleep, and lessen fatigue. People also take reishi mushroom for health conditions such as: High blood pressure. High cholesterol.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div class="card-group">
                <div class="card">
                    <img src="/img/morel.jpeg" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Morel</h5>
                        <p class="card-text">Morels have been in use in traditional medicine for centuries, due to their health-related benefits, and current research demonstrated their anti-oxidative and anti-inflammatory bioactivities, in addition to immunostimulatory and anti-tumor properties.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="/img/cordyceps.jpeg" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Cordyceps</h5>
                        <p class="card-text">Cordyceps is a type of medicinal mushroom said to offer antioxidant and anti-inflammatory benefits.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="/img/lionsmane.webp" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Lion's Mane</h5>
                        <p class="card-text">Lion's mane mushrooms (Hericium erinaceus) are white, globe-shaped fungi that have long, shaggy spines. People can eat them or take them in the form of supplements. Research suggests that they may offer a range of health benefits, including reduced inflammation and improved cognitive and heart health.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div class="card-group">
                <div class="card">
                    <img src="/img/agarikon.png" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Agarikon</h5>
                        <p class="card-text">The agarikon mushroom is also referred to as the laricifomes officinalis or quinine conk. Newly popular, the agarikon has ancient origins going back centuries. And today, we are rediscovering its great deal of benefits to improve physical and spiritual well being.With a bitter taste and texture, it isn’t particularly tasty. But, you can still enjoy it as an herbal supplement to support overall health.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="/img/maitake.jpeg" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Maitake</h5>
                        <p class="card-text">Maitake is an edible mushroom consumed widely in Asia as food and used in traditional medicine to treat diabetes and hypertension.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="/img/Turkeytail.jpeg" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Turkey Tail</h5>
                        <p class="card-text">Turkey tail mushroom grows on stumps and the decomposing wood of trees. The PSP and PSK in turkey tail mushroom might help slow cancer growth and boost the immune system. People use turkey tail mushroom to improve response to cancer medicines and radiation.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;