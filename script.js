  function createNameTag(name) {
      const tagsContainer = document.getElementById("tagsContainer");
      const tag = document.createElement("div");
      tag.className = "tag";
      tag.style.backgroundColor = getRandomColor();

      const nameElement = document.createElement("span")
      nameElement.style.fontSize="100px";
      nameElement.style.padding="50px";
 
      nameElement.innerHTML = ` <h1 class="heading" style="margin: 0; font-size: 82px;">
      Hello
  </h1>
  <p class="Pargraphe" style="margin:0  0 20px 0; font-size: 37px;"> my name is</p>
</div>  ${name}`;

       const deleteIcon = document.createElement("span");
        deleteIcon.style.fontSize="30px";
         deleteIcon.style.marginTop="-342px";

      deleteIcon.className = "delete-icon";
      deleteIcon.textContent = "X";

      deleteIcon.addEventListener("click", () => {
          tagsContainer.removeChild(tag);
          removeTagFromLocalStorage(name);
      });

      tag.appendChild(nameElement);
      tag.appendChild(deleteIcon);

      tagsContainer.appendChild(tag);
  }

  function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  function saveTagToLocalStorage(name) {
      let tags = JSON.parse(localStorage.getItem("tags")) || [];
      tags.push(name);
      localStorage.setItem("tags", JSON.stringify(tags));
  }

  function removeTagFromLocalStorage(name) {
      let tags = JSON.parse(localStorage.getItem("tags")) || [];
      const index = tags.indexOf(name);
      if (index !== -1) {
          tags.splice(index, 1);
          localStorage.setItem("tags", JSON.stringify(tags));
      }
  }

  function clearAllTags() {
      const tagsContainer = document.getElementById("tagsContainer");
      tagsContainer.innerHTML = "";
      localStorage.removeItem("tags");
  }

  window.addEventListener("load", () => {
      const tags = JSON.parse(localStorage.getItem("tags")) || [];
      tags.forEach(tag => createNameTag(tag));
  });

  const generateButton = document.getElementById("generateButton");
  const clearAllButton = document.getElementById("clearAllButton");

  generateButton.addEventListener("click", () => {
      const nameInput = document.getElementById("nameInput");
      const name = nameInput.value.trim();

      if (name !== "") {
          createNameTag(name);
          nameInput.value = "";
          saveTagToLocalStorage(name);
      }
  });

  clearAllButton.addEventListener("click", () => {
      clearAllTags();
  });