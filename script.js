
// ELITE NEWS MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
}

// NEWS SEARCH

const searchInput = document.getElementById("searchInput");
const newsCards = document.querySelectorAll(".news-card");

if (searchInput) {
    searchInput.addEventListener("input", function() {

        const searchText = searchInput.value.toLowerCase();

        newsCards.forEach(function(card) {

            const newsText = card.textContent.toLowerCase();

            if (newsText.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    });
}

// SEARCH ALL NEWS PAGE

const allNewsSearch = document.getElementById("allNewsSearch");
const allNewsCards = document.querySelectorAll(".news-page .news-card");
const noNews = document.getElementById("noNews");

if (allNewsSearch) {

    allNewsSearch.addEventListener("input", function() {

        const searchValue = allNewsSearch.value.toLowerCase();
        let visibleCount = 0;

        allNewsCards.forEach(function(card) {

            const content = card.textContent.toLowerCase();

            if (content.includes(searchValue)) {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }

        });

        if (noNews) {
            noNews.style.display =
                visibleCount === 0 ? "block" : "none";
        }

    });

}

// CATEGORY SEARCH

const categorySearch = document.getElementById("categorySearch");
const categoryCards = document.querySelectorAll(".category-card");
const noCategory = document.getElementById("noCategory");

if (categorySearch) {

    categorySearch.addEventListener("input", function() {

        const value = categorySearch.value.toLowerCase();
        let count = 0;

        categoryCards.forEach(function(card) {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
                count++;
            } else {
                card.style.display = "none";
            }

        });

        if (noCategory) {
            noCategory.style.display =
                count === 0 ? "block" : "none";
        }

    });

}

// SHARE ARTICLE

const shareArticle = document.getElementById("shareArticle");

if (shareArticle) {

    shareArticle.addEventListener("click", async function() {

        const articleData = {
            title: document.title,
            text: "Read this article from ELITE NEWS.",
            url: window.location.href
        };

        try {

            if (navigator.share) {
                await navigator.share(articleData);
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(articleData.url);
                alert("Article link copied!");
            } else {
                alert("Sharing is not supported in this browser.");
            }

        } catch (error) {
            console.log("Sharing cancelled or unavailable.");
        }

    });

}

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const formStatus = document.getElementById("formStatus");

    const emailMessage =
      "mailto:YOUR-EMAIL@example.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
      );

    formStatus.textContent = "Opening your email application...";

    window.location.href = emailMessage;
  });
}

// ELITE NEWS HOMEPAGE SEARCH

const eliteSearch = document.getElementById("eliteSearch");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");

function searchEliteNews() {
  if (!eliteSearch) return;

  const query = eliteSearch.value.trim().toLowerCase();

  if (!query) {
    searchMessage.textContent = "Please enter a search keyword.";
    return;
  }

  const cards = document.querySelectorAll(".news-card");
  let found = 0;

  cards.forEach(function(card) {
    const content = card.textContent.toLowerCase();

    if (content.includes(query)) {
      card.style.display = "";
      found++;
    } else {
      card.style.display = "none";
    }
  });

  if (found === 0) {
    searchMessage.textContent =
      "No matching news found. Try another keyword.";
  } else {
    searchMessage.textContent =
      found + " matching news article(s) found.";
  }
}

if (searchButton) {
  searchButton.addEventListener("click", searchEliteNews);
}

if (eliteSearch) {
  eliteSearch.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      searchEliteNews();
    }
  });
}

// ELITE NEWS DYNAMIC ARTICLES

const articleDatabase = {
  "ai-future": {
    title: "The Future of Artificial Intelligence",
    category: "Technology",
    author: "ELITE NEWS Editorial",
    date: "12 November 2026",
    paragraphs: [
      {
        heading: "Introduction",
        text: "Artificial Intelligence is changing how people learn, work and use digital technology. AI systems can help users solve problems, organize information and develop new ideas."
      },
      {
        heading: "How AI Can Help",
        text: "AI tools can support education, business, communication and creativity. They can help people complete tasks more efficiently when used responsibly."
      },
      {
        heading: "The Future",
        text: "As technology develops, people will need digital skills, creativity and critical thinking to make good use of artificial intelligence."
      }
    ]
  },

  "digital-education": {
    title: "The Importance of Digital Education",
    category: "Education",
    author: "ELITE NEWS Editorial",
    date: "12 November 2026",
    paragraphs: [
      {
        heading: "Introduction",
        text: "Digital education uses technology to make learning more accessible. People can study using computers, tablets and smartphones."
      },
      {
        heading: "Learning New Skills",
        text: "Students can learn programming, communication, business and other useful skills through digital learning resources."
      },
      {
        heading: "Conclusion",
        text: "Digital education creates opportunities for lifelong learning and personal development."
      }
    ]
  },

  "small-business": {
    title: "How to Start a Small Digital Business",
    category: "Business",
    author: "ELITE NEWS Editorial",
    date: "12 November 2026",
    paragraphs: [
      {
        heading: "Start With an Idea",
        text: "A digital business can begin with a useful service, a product or a solution to a problem people experience."
      },
      {
        heading: "Build Your Online Presence",
        text: "A website and social media pages can help customers discover your business and understand what you offer."
      },
      {
        heading: "Keep Improving",
        text: "Listen to customers, learn new skills and improve your services as your business grows."
      }
    ]
  }
};

const articleTitle = document.getElementById("articleTitle");

if (articleTitle) {
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get("id");
  const article = articleDatabase[articleId];

  const category = document.getElementById("articleCategory");
  const meta = document.getElementById("articleMeta");
  const content = document.getElementById("articleContent");

  if (article) {
    document.title = article.title + " | ELITE NEWS";

    articleTitle.textContent = article.title;
    category.textContent = article.category;
    meta.textContent = "By " + article.author + " | " + article.date;

    content.innerHTML = "";

    article.paragraphs.forEach(function(item) {
      const heading = document.createElement("h2");
      heading.textContent = item.heading;

      const paragraph = document.createElement("p");
      paragraph.textContent = item.text;

      content.appendChild(heading);
      content.appendChild(paragraph);
    });

  } else {
    articleTitle.textContent = "Article Not Found";
    category.textContent = "ELITE NEWS";
    meta.textContent = "";
    content.textContent =
      "Sorry, this article could not be found. Please return to the News page.";
  }
}

// SHARE ARTICLE

const shareButton = document.getElementById("shareArticle");

if (shareButton) {
  shareButton.addEventListener("click", async function() {
    const shareData = {
      title: document.title,
      text: "Read this article on ELITE NEWS",
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // User cancelled sharing.
      }
    } else {
      alert("Copy this page address to share the article: " +
        window.location.href);
    }
  });
}

/* ELITE NEWS MANAGEMENT SYSTEM */

const adminForm = document.getElementById("adminForm");
const managedArticles = document.getElementById("managedArticles");
const adminMessage = document.getElementById("adminMessage");

function getManagedNews() {
  return JSON.parse(localStorage.getItem("eliteNews")) || [];
}

function saveManagedNews(news) {
  localStorage.setItem("eliteNews", JSON.stringify(news));
}

function displayManagedNews() {
  if (!managedArticles) return;

  const news = getManagedNews();
  managedArticles.innerHTML = "";

  if (news.length === 0) {
    managedArticles.textContent = "No articles published yet.";
    return;
  }

  news.forEach(function(article) {
    const card = document.createElement("div");
    card.className = "managed-article";

    const title = document.createElement("h3");
    title.textContent = article.title;

    const category = document.createElement("p");
    category.textContent = "Category: " + article.category;

    const author = document.createElement("p");
    author.textContent = "Author: " + article.author;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Article";
    deleteButton.className = "delete-news";

    deleteButton.addEventListener("click", function() {
      const updatedNews = getManagedNews().filter(function(item) {
        return item.id !== article.id;
      });

      saveManagedNews(updatedNews);
      displayManagedNews();
    });

    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(author);
    card.appendChild(deleteButton);

    managedArticles.appendChild(card);
  });
}

if (adminForm) {
  adminForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("newsTitle").value.trim();
    const category = document.getElementById("newsCategory").value;
    const author = document.getElementById("newsAuthor").value.trim();
    const description = document.getElementById("newsDescription").value.trim();

    if (!title || !category || !author || !description) {
      adminMessage.textContent = "Please complete all fields.";
      return;
    }

    const news = getManagedNews();

    news.unshift({
      id: Date.now().toString(),
      title: title,
      category: category,
      author: author,
      description: description,
      date: new Date().toLocaleDateString()
    });

    saveManagedNews(news);
    adminForm.reset();

    adminMessage.textContent = "Article saved successfully!";
    displayManagedNews();
  });
}

displayManagedNews();
  
// ELITE NEWS LOGIN FORM - UI DEMO

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email =
      document.getElementById("adminEmail").value.trim();

    const password =
      document.getElementById("adminPassword").value;

    const loginMessage =
      document.getElementById("loginMessage");

    if (!email || !password) {
      loginMessage.textContent =
        "Please enter your email and password.";
      return;
    }

    loginMessage.textContent =
      "Login interface is ready. Secure authentication " +
      "must be connected before admin access is enabled.";
  });
}
