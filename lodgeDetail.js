let gallery = document.getElementsByClassName("gallery")[0];
let detailsCtn = document.getElementsByClassName("detailsCtn")[0];
let overview = document.getElementsByClassName("overview")[0];
let buyersAgent = document.getElementsByClassName("buyers-agent")[0];
let aboutDetail = document.getElementsByClassName("aboutDetail")[0];
let review = document.getElementsByClassName("review")[0];

aboutDetail.addEventListener("click", () => {
    aboutDetail.classList = "active"
    gallery.classList = ""
    review.classList = ""
    overview.style.display = "block"
    buyersAgent.style.display = "block"
    overview.innerHTML = `<h3>Overview</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure esse dolorem error amet nostrum dolore quos debitis repellendus, aut recusandae consequatur. Nobis error ea a ullam optio modi, quod hic?
              Sapiente, dolorum expedita non quis eveniet magni aspernatur reiciendis totam officiis, inventore alias dolor autem ipsum vero? At fuga fugit quis! Tempora maxime harum fugiat aperiam vel aut provident esse.
              Eligendi aperiam et voluptas ut veritatis, ex omnis praesentium, iusto neque dolores nihil necessitatibus explicabo animi. Esse fugiat, accusantium corrupti veritatis eos est provident suscipit voluptatem reiciendis dolores ipsa ratione.
            </p>`;
    buyersAgent.innerHTML = `<h3>Buyer's Agent</h3>
            <div class="agent-info">
                <img src="assets/images/agent.png" alt="Agent">
                <span>Buzz brain</span>
            </div>`;
    detailsCtn.innerHTML = `
    <div class="property-stats">
              <div>
                <span>2</span>
                <ion-icon name="bed-outline"></ion-icon>
                <span>Kitchen</span>
              </div>

                <div>
                <strong>1</strong>
                <ion-icon name="man-outline"></ion-icon>
                <span>Bathroom</span>
                </div>

                <div>
                <strong>1</strong>
                <ion-icon name="square-outline"></ion-icon>
                <span>Balcony</span>
                </div>
            </div>`
})
gallery.addEventListener("click", () => {
    aboutDetail.classList = ""
    gallery.classList = "active"
    review.classList = ""
    overview.innerHTML = ``;
    buyersAgent.innerHTML = ``;
    detailsCtn.innerHTML = `
    <div class="gallery-section">
    <div class="gallery-header">
        <h3>Photo <span>(8 Photos)</span></h3>
    </div>
    <div class="photo-gallery">
        <div class="photo-item">
            <img src="assets/images/herobanner.png" alt="Photo 1">
        </div>
        <div class="photo-item">
            <img src="assets/images/herobanner2.png" alt="Photo 2">
        </div>
        <div class="photo-item">
            <img src="assets/images/herobanner3.png" alt="Photo 3">
        </div>
        <div class="photo-item">
            <img src="assets/images/herobanner4.png" alt="Photo 4">
        </div>
        <div class="photo-item">
            <img src="assets/images/property-1.jpg" alt="Photo 5">
        </div>
        <div class="photo-item">
            <img src="assets/images/property-2.jpg" alt="Photo 6">
        </div>
    </div>
    
    <div class="gallery-header">
        <h3>Video <span>(5 Videos)</span></h3>
    </div>
    <div class="video-gallery">
        <div class="video-item">
            <img src="assets/images/property-3.jpg" alt="Video 1">
            <ion-icon name="play-circle-outline"></ion-icon>
        </div>
        <div class="video-item">
            <img src="assets/images/property-4.png" alt="Video 2">
            <ion-icon name="play-circle-outline"></ion-icon>
        </div>
        <div class="video-item">
            <img src="assets/images/herobanner.png" alt="Video 3">
            <ion-icon name="play-circle-outline"></ion-icon>
        </div>
    </div>
</div>`
})
review.addEventListener("click", () => {
    aboutDetail.classList = ""
    gallery.classList = ""
    review.classList = "active"
    overview.innerHTML = ``;
    buyersAgent.innerHTML = ``;
    overview.style.display = "none"
    buyersAgent.style.display = "none"
    detailsCtn.innerHTML = ` <div align="center">No review yet</div> `
})