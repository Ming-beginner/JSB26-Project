export default function renderProducts(productList, placeToRender) {
    let htmls = productList.map(function(item) {
        return `<div class="product__item laptop-${item.id} wow animate__animated animate__fadeInUp animate__slow">
                    <img class="product__item--img" src="${item.imageLink}" alt="">
                    <div class="product__item--content">
                        <h3>${item.name}</h3>
                        <p>${item.feature}</p>
                        <div class="price-block">
                            <h5 class="product__item--price">${item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</h5>
                            <h6 class="product__item--old-price">${item.oldPrice}</h6>
                        </div>
                    </div>
                    <div class="product__item--buy-block">
                        <button onclick="window.location.href='./purchaseSite.html'" class="buy-block__buy">Buy Now</button>
                        <button class="buy-block__add">Add To Cart</button>
                    </div>
                </div>`
    });
    placeToRender.innerHTML += htmls.join("");
}