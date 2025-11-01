import './ProductDetail.css';

function ProductDetail(){
    return(
        <main className="ProductDetail">
            <aside className="product-detail__gallery"></aside>

            <section className="product-detail__content">

                <header className="product-detail__header">
                    <h1></h1>
                    <span className="product-detail__price"></span>
                    <span className="product-detail__stock"></span>
                </header>

                <article className="product-detail__seller">
                    <h2></h2>
                    <p></p>
                </article>

                <section className="product-detail__details">
                    <h2></h2>
                    <p></p>
                </section>

                <footer className="product-detail__actions">
                    <button></button>
                    <button></button>
                </footer>

            </section>

            <aside className="product-detail__extras">
                <section className="extras__location"></section>
                <section className="extras__sponsored"></section>
            </aside>
        </main>   
    )
}

export default ProductDetail