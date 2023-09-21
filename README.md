# Namaste Youtube

- Header
- Body
  - SideBar
    - Menu Items
  - Main Container
    - Button List
    - Video Container
      - Video Card


# Desbouncing

- fast typing - 30ms //API call between 2 or 3 keypress
- slow typing - 300ms //API call on every word //Impact Performance

- Useless to call api on every keypress
- On fast typing we know what we want to search so lesser no of suggestions are provided

Example:
- iphone pro max = 14 letters * 1000users = 14000 api calls
- with debouncing = 3 calls * 1000 users = 3000 api calls

Debouncing with 200ms
- if difference between 2 key strokes is <200 - Decline api call
- greater than 200ms makes an api call

  
