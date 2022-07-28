export function Blog() {
  // if local storage exists, fetch that. Otherwise, assign to this and store in local storage
  this.data = localStorage.getItem("blogEntries")
    ? JSON.parse(localStorage.getItem("blogEntries"))
    : [
        {
          title: "Test Entry 1",
          date: new Date().toLocaleDateString("en-US").split("/"),
          summary: "yeetus deletus 1. Hello Dylan!",
        },
        {
          title: "Test Entry 2",
          date: new Date().toLocaleDateString("en-US").split("/"),
          summary: "yeetus deletus 2. Hello Allison!",
        },
        {
          title: "Test Entry 3",
          date: new Date().toLocaleDateString("en-US").split("/"),
          summary: "yeetus deletus 3. Hello Brenton!",
        },
      ];

  let updateLocalStorage = () => {
    localStorage.setItem("blogEntries", JSON.stringify(this.data));
  };

  updateLocalStorage();

  // creates w/ date = now
  this.createBlog = function (title, description, date) {
    this.data.push({
      title: title,
      date: date,
      summary: description,
    });
    updateLocalStorage();
  };

  // returns deep copy array of all blogs
  this.getAllBlogs = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  this.getBlog = function (index) {
    return JSON.parse(JSON.stringify(this.data[index]));
  };

  //
  this.editBlog = function (index, title, description, date) {
    this.data[index] = {
      title: title,
      date: date || this.data[index].date,
      summary: description,
    };
    updateLocalStorage();
  };

  this.deleteBlog = function (index) {
    this.data.splice(index, 1);
    updateLocalStorage();
  };
}
