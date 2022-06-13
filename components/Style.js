import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    .h1 {

        font-size: 1.5rem;

        letter-spacing: 0.9px;

        background: linear-gradient( 90deg, rgba(249, 211, 180, 1) 0%, rgba(249, 211, 180, 0) 100%);

        background-clip: text;

        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;

        width: fit-content;

    }

    

    h3 {

        font-size: 0.75rem;

        letter-spacing: 0.9px;

        background: linear-gradient( 90deg, rgba(249, 211, 180, 1) 0%, rgba(249, 211, 180, 0) 100%);

        background-clip: text;

        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;

        width: fit-content;

    }

    

    .search {

        width: 71%;

        margin: 4rem 0 2rem;

        display: flex;

        align-items: center;

        justify-content: center;

        padding: 1.5rem 1.75rem;

        border-radius: 3rem;

        background: # 1 f2123; -
        webkit - box - shadow: 5 px 5 px 7 px #1c1d1f, -5px -5px 7px # 222527;
        box - shadow: 5 px 5 px 7 px #1c1d1f, -5px -5px 7px # 222527;
    }

        .input {
        flex: 1;
        border: none;
        font - size: 1.5 rem;
        font - family: var (--font - raleway);
        font - weight: 500;
        padding - right: 1 rem;
        outline: none;
        color: #a1a1a1;
        background: #1f2123;

    }

    

    .img {

        width: 35px;

        height: 35px;

        cursor: pointer;

    }

    

    

    /* .search button {

      padding: 20px 40px;

      border-radius: 0.5rem;

      margin-left: 15px;

      color: # a1a1a1;
        font - family: var (--font - raleway);
        font - weight: 900;
        letter - spacing: 0.75 px;
        font - size: 1.25 rem;
        cursor: pointer;
        background: #1f2123;

      -webkit-box-shadow: 5px 5px 7px # 1 c1d1f,
        -5 px - 5 px 7 px #222527;

      box-shadow: 5px 5px 7px # 1 c1d1f,
        -5 px - 5 px 7 px #222527;

    } */

    

    .empty {

        width: 100%;

        margin-top: 3rem;

        display: flex;

        justify-content: center;

        align-items: center;

    }

    

    .empty h2 {

        font-size: 1.25rem;

        color: # f9d3b4;
        font - family: var (--font - raleway);
    }

        .container {
        width: 100 % ;
        margin - top: 3 rem;
        display: flex;
        justify - content: center;
        align - items: center;
        flex - wrap: wrap;
    }

        .movie {
        width: 250 px;
        height: 300 px;
        margin: 1.5 rem;
        position: relative;
        border - radius: 12 px;
        overflow: hidden;
        border: none;
        transition: all 0.4 s cubic - bezier(0.175, 0.885, 0, 1);
        box - shadow: 0 px 13 px 10 px - 7 px rgba(0, 0, 0, 0.1);
    }

        .movie div: nth - of - type(1) {
        position: absolute;
        padding: 16 px;
        width: 100 % ;
        opacity: 0;
        top: 0;
        color: #f9d3b4;
    }

        .movie: hover {
        box - shadow: 0 px 30 px 18 px - 8 px rgba(0, 0, 0, 0.1);
        transform: scale(1.05, 1.05);
    }

        .movie div: nth - of - type(2) {
        width: 100 % ;
        height: 100 % ;
    }

        .movie div: nth - of - type(2) img {
        height: 100 % ;
        width: 100 % ;
    }

        .movie div: nth - of - type(3) {
        z - index: 2;
        background - color: #343739;

        padding: 16px 24px 24px 24px;

        position: absolute;

        bottom: 0;

        right: 0;

        left: 0;

    }

    

    .movie div:nth-of-type(3) span {

        font-family: "Raleway", sans-serif;

        text-transform: uppercase;

        font-size: 13px;

        letter-spacing: 2px;

        font-weight: 500;

        color: # f0f0f0;
    }

        .movie div: nth - of - type(3) h3 {
        margin - top: 5 px;
        font - family: "Roboto Slab", serif;
        color: #f9d3b4;
    }

        .movie: hover div: nth - of - type(2) {
        height: 100 % ;
        opacity: 0.3;
    }

        .movie: hover div: nth - of - type(3) {
        background - color: transparent;
    }

        .movie: hover div: nth - of - type(1) {
        opacity: 1;
    }

        @media screen and(max - width: 600 px) {
        .app {
            padding: 4 rem 2 rem;
        }
        .search {
            padding: 1 rem 1.75 rem;
            width: 100 % ;
        }
        .search input {
            font - size: 1 rem;
        }
        .search img {
            width: 20 px;
            height: 20 px;
        }
    }

        @media screen and(max - width: 400 px) {
        .app {
            padding: 4 rem 1 rem;
        }
        h1 {
            font - size: 2 rem;
        }
        .container {
            margin - top: 2 rem;
        }
        .movie {
            width: "100%";
            margin: 1 rem;
        }
    }

});

export { styles }