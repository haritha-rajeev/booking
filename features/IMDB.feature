Feature: Traversing through IMDB

        Scenario: Traversing through IMBD -menu

            Given IMDB site
             When click on menu
             Then clcik on Top 250 movies
              And select the movie '1. The Shawshank Redemption'
             Then rate the movie

        Scenario: Traversing through IMBD -search

            Given IMDB site
             When click on searh for a movie Jailer
             Then click on Actor Divya