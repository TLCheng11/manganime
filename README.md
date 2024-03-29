# Manganime

- An anime and manga web application with React, allowing users to search and save their favorite content, allowing them to hold their own unique collection of anime and manga.
- Deployed website: [Manganime](http://54.210.20.214:3011/)

## Creators
- [Tony Cheng](https://github.com/TLCheng11)
- [Alan Xu](https://github.com/alanxu186)

# Setup

`Run "json-server --watch -p 3010 db.json"`

`Run "npm install" followed by "npm start".`

open [localhost:3011](http://localhost:3011/) in your browser

# Introduction

- Welcome to our Phase 2 project, an amazing manga and anime website full of surprises! At its core, Mangaime is a website
  where you can add manga and anime to your favorites list. Our website carries a large variety of options to choose from
  and caters to both sides. If you only like to read manga, that's no problem because our library carries more than just the
  top 50 mangas. The same applies to our extensive animes to choose from!

- Before utilizing the features of our website, users must create an account in order to add or delete manga/anime from their
  favorites list. The username must be 3-18 characters and start with a letter. The password requires users to enter 6-18
  characters. When the user is not logged in, there will be a fantastic gif prompting them to make an account.

- To make the process easier for users, we have displayed the top 50 manga and anime on separate pages in a creative fashion.
  When you select the manga/anime card you will be led to a page that displays details such as the title, rating, description,
  etc. On the page, you may also choose to add or delete the manga/anime from your favorites list. The anime options will also
  have trailers that run in iframes to give users an idea of what the anime is about.

- The next feature includes a search bar that will go through the entire Kitsu API database in order to find the desired manga
  or anime. The search bar has a function for users to sort into a manga or anime category. When inputting the title into the
  search bar, it will return the first 20 results. Each result will also provide the essential details when clicked on.

- The favorites feature updates every time a manga/anime is added or deleted from this list. If the list is empty, it will
  display a text that users can click to redirect them to the selection page.
