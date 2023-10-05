Feature: Searching for a room in goa

        Scenario: using hotel.com

            Given I am in hotel.com
             When  place is Goa , from Septemner 28 to 30 and 2 adults
             Then click on search


        Examples:
                  | site      |
                  | hotel.com |