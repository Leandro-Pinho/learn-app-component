import './App.css';

import Header from './components/Header';
import ListItems from './components/ListItems';
import Section from './components/Section';


const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  }, {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  }, {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
]

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  }, {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/011/153/369/non_2x/3d-web-developer-working-on-project-illustration-png.png",
    alt: "Imagem de Alanzoka"
  }, {
    url: "https://www.twitch.tv/cellbit",
    imageUrl: "https://png.pngtree.com/png-vector/20210118/ourlarge/pngtree-flat-design-concept-of-programmers-at-work-mobile-app-software-development-png-image_2764955.jpg",
    alt: "Imagemd de Cellbit"
  }
]

const socialListData = [
  {
    url: "https://www.twitch.com",
    imageUrl: '/assets/twitch.svg',
    alt: "link twitch"
  },
  {
    url: "https://www.instagram.com",
    imageUrl: '/assets/instagram.svg',
    alt: "link instagram"
  }, {
    url: "https://www.twitter",
    imageUrl: "/assets/twitter.svg",
    alt: "link twitter"
  }, {
    url: "https://www.youtube.com",
    imageUrl: "./assets/youtube.svg",
    alt: "link youtube"
  }
]


function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section title="Meus jogos" subTitle="Os games que eu mais curto jogar!" className="games-list">
          {
            gamesListData.map(function (item) {
              return (
                <ListItems
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section title="Canais e streamers" subTitle="Lista de canais e transmissões que não perco!" className="channel-list">
          {
            channelListData.map(function (item) {
              return (
                <ListItems
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section title="Minhas redes" subTitle="Se conecte comigo agora mesmo!" className="games-list">
          {
            socialListData.map(function (item) {
              return (
                <ListItems
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

      </main>
    </div>
  );
}

export default App;
