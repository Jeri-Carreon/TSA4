    document.querySelectorAll(".overlay .btn").forEach(button => {
        button.addEventListener("click", function() {
            this.classList.add("clicked");
        });
    });

    document.querySelectorAll(".overlay").forEach(overlay => {
        overlay.addEventListener("click", function () {
            let button = this.querySelector(".learn-more-btn");
            if (button) {
                button.click(); 
            }
        });
    });
    document.querySelectorAll(".learn-more-btn").forEach(button => {
        button.addEventListener("click", function () {
            let modalTitle = document.getElementById("modalLabel");
            let modalBodyTitle1 = document.getElementById("modalBodyTitle1");
            let modalBodyTitleDetails1 = document.getElementById("modalBodyTitleDetails1");
            let modalBodyTitleDetails2 = document.getElementById("modalBodyTitleDetails2");
            let modalBodyTitleDetails3 = document.getElementById("modalBodyTitleDetails3");
            let modalBodyTitle2 = document.getElementById("modalBodyTitle2");
            let modalBody = document.getElementById("modalBody");
            let modalImage = document.getElementById("modalImage");

            modalTitle.innerText = this.dataset.title;
            modalBodyTitle1.innerText = this.dataset.descriptionTitle1;
            modalBodyTitleDetails1.innerText = this.dataset.descriptionTitleDetails1;
            modalBodyTitleDetails2.innerText = this.dataset.descriptionTitleDetails2;
            modalBodyTitleDetails3.innerText = this.dataset.descriptionTitleDetails3;
            modalBodyTitle2.innerText = this.dataset.descriptionTitle2;
            modalBody.innerText = this.dataset.description;
            modalImage.src = this.dataset.image;

            let modal = new bootstrap.Modal(document.getElementById("car-Modal"));
            modal.show();
        })
    })