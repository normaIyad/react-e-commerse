
import { useParams } from "react-router-dom"
import Card from "../../../componants/user/Card/Card";
import useApi from "../../../getAPI"
import Loading from "../../../componants/user/Loading/Loading";
import Landing from "../../../componants/user/Landing/Landing" ;
import phons from "../../../assets/landing/Banner 2.jpg"
import Toys from "../../../assets/landing/Toys.png"
import home from "../../../assets/landing/Home.png"
import takecare from "../../../assets/landing/takecare.png"
import shop from "../../../assets/landing/shop.jpg"
import Catgrios from "../../../componants/user/Catigores/Catgrios"

export default function ProdactPyCatigory() {
     // replace with your desired image URL or use a component for the image
    const { catigoryId , categoryName  } = useParams();
     console.log(catigoryId , categoryName)
    const [data, error, loading] = useApi(`https://ecommerce-node4.onrender.com/products/category/${catigoryId}`)
    console.log(data, loading, error);
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!data || !data.products) {
        return <p>No products found.</p>;
    }
    // const prodactimg = (categoryName)=>{
    //   switch(categoryName.toLowerCase){
    //     case "mobiles": return phons;
    //     case "toys & games": return Toys;
    //     case "home & kitchen": return home;
    //     case "personal care": return takecare;
    //     default: return shop;
    //   }
    // }
    const prodactimg = (catigoryId) => {
        switch (catigoryId) {
            case "66fb86a741aba231158e3b51":
                return phons;
            case "66fb864941aba231158e3b4d":
                return Toys;
            case "66fb86e241aba231158e3b59":
                return home;
            case "66fb86c541aba231158e3b55":
                return takecare;
            default:
                return shop;
        }
    };
          
    return (
        <>
          <section>
            <Landing imgsrc={prodactimg(catigoryId)}  title={categoryName}  para="Shop now"  link="#" />
          </section>
            <section className={`prodactSection`}>
                <div className="container">
                    <div className="title">
                        <h2 className="header">Products</h2>
                    </div>
                
                <div className="row">
                    {data.products.map((product) => {
                        return (
                                <div className="col-md-4" key={product._id}>
                                    <Card
                                        id={product._id}
                                        imgs={product.mainImage.secure_url}  // Use `imgsrc` for the correct prop name
                                        name={product.name.slice(0, 80)}
                                        description={product.description.slice(0, 180) + "..."}
                                        price={product.price}
                                        finalPrice={product.finalPrice}
                                    />
                                </div>
                        )
                    })
                    }
                </div>
                </div>
            </section>
            <section>
                <Landing imgsrc={shop}  title="Shop Now"  para="Discover more products at our store"  link="#" />
            </section>
            <section>
                <div className="container">
                <Catgrios/>
                </div>
            </section>
         

        </>
    )
}
