# Namaste Youtube

- Header
- Body
  - SideBar
    - Menu Items
  - Main Container
    - Button List
    - Video Container
      - Video Card

# FEATURES

## Search Cache using Redux

## Search Optimisation using Debouncing

- fast typing - 30ms //API call between 2 or 3 keypress
- slow typing - 300ms //API call on every word //Impact Performance

- Useless to call api on every keypress
- On fast typing we know what we want to search so lesser no of suggestions are provided

Example:

- iphone pro max = 14 letters \* 1000users = 14000 api calls
- with debouncing = 3 calls \* 1000 users = 3000 api calls

Debouncing with 200ms

- if difference between 2 key strokes is <200 - Decline api call
- greater than 200ms makes an api call

## N level deep Comments using recursion

## Live Chat

- Challenges
  - Get Live Data (Data Layer)
  - Update Chat with live data quickly without page freeze (UI Layer)

- 2 ways
  - Web Sockets(no regular interval) - 2 way live data from Backend to UI and vice versa
  (Data can be sent any time ) Example - Groww, Zerodha , Whatsapp
  - API Polling (interval) - Data is unidirectional. Example - GMAIL, CrickBuzz (API Polling in 25 secs)
  - After a while the messages in live cht are removed

## Infinite Page Scroll >>>> Pagination

## UseMemo - Performance hook - Caching the results between rerenders - Rerendering is expensive

## useRef  - I want my value to be changed but don't want a rerender of a component and react to stick to the value. Ref is an object. But it will update the UI once another state variable is changed




