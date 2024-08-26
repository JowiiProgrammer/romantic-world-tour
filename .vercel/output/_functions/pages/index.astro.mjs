/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, f as renderSlot, g as createAstro, m as maybeRenderHead, h as renderComponent } from '../chunks/astro/server_DPdJ5oIv.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { Howl } from 'howler';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "G:/romantic-world-tour/src/layouts/Layout.astro", void 0);

const countries = [
    'Argentina Bariloche', 'Australia', 'Canadá', 'Corea', 'Ecuador', 'Egipto', 'EE. UU.', 
    'Inglaterra', 'Japón', 'Noruega', 'Paraguay', 'Perú', 'Roma', 'Rusia', 'Suiza', 'Venecia'
  ];
  
  const romanticMessages = {
    'Paraguay': 'Nuestro amor es tan cálido como el abrazo guaraní y tan refrescante como el tereré.',
    'Argentina Bariloche': 'Nuestro amor es tan apasionado como el tango y tan impresionante como los paisajes de Bariloche.',
    'Australia': 'Nuestro amor es tan grande como el Outback y tan colorido como la Gran Barrera de Coral.',
    'Canadá': 'Nuestro amor es tan puro como las Montañas Rocosas y tan dulce como el jarabe de arce.',
    'Corea': 'Nuestro amor es tan armonioso como el yin y el yang en la bandera coreana.',
    'Ecuador': 'Nuestro amor está en el centro del mundo, como la línea del Ecuador que atraviesa este hermoso país.',
    'Egipto': 'Nuestro amor es tan antiguo como las pirámides y tan misterioso como la Esfinge.',
    'EE. UU.': 'Nuestro amor es tan alto como el Empire State y tan libre como la Estatua de la Libertad.',
    'Inglaterra': 'Nuestro amor es tan sólido como el Big Ben y tan vasto como los jardines ingleses.',
    'Japón': 'Nuestro amor es tan fuerte como el Monte Fuji y tan sereno como un jardín zen.',
    'Noruega': 'Nuestro amor brilla como las auroras boreales en el cielo noruego.',
    'Perú': 'Nuestro amor es tan majestuoso como Machu Picchu y tan rico como la historia inca.',
    'Roma': 'Nuestro amor es eterno, como la Ciudad Eterna.',
    'Rusia': 'Nuestro amor es tan vasto como la tundra siberiana y tan cálido como un abrazo ruso.',
    'Suiza': 'Nuestro amor es tan preciso como un reloj suizo y tan dulce como su chocolate.',
    'Venecia': 'Nuestro amor fluye como los canales de Venecia, conectando nuestros corazones para siempre.'
  };

const songs = [
    { title: `In Case You Didn't Know`, artist: 'Brett Young', src: `/music/Brett Young - In Case You Didn't Know.mp3`, cover: 'https://i.scdn.co/image/ab67616d00001e028c67513a5ffd9a018b410f1b' },
    { title: 'No Hay Nadie Más', artist: 'Sebastián Yatra', src: '/music/Sebastián Yatra - No Hay Nadie Más.mp3', cover: 'https://i.scdn.co/image/ab67616d00001e02a04e5df68ea4c891a4252c7e' },
    { title: 'Momentos', artist: 'Reik', src: '/music/Reik - Momentos.mp3', cover: 'https://i.scdn.co/image/ab67616d00001e02d6cfdde09715f80ddf68ec52' },
  ];

const $$Astro = createAstro();
const $$CountryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CountryCard;
  const { country, message } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="country-card p-4 rounded-lg cursor-pointer bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden relative"${addAttribute(country, "data-country")}${addAttribute(message, "data-message")} data-astro-cid-jyufb5tp> <div class="absolute top-0 left-0 w-full h-2 bg-yellow-400" data-astro-cid-jyufb5tp></div> <div class="flex justify-between items-start mb-2" data-astro-cid-jyufb5tp> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-yellow-400" viewBox="0 0 512 512" aria-hidden="true" data-astro-cid-jyufb5tp> <path fill="currentColor" d="m395.2 283l-14.7-14.6l12.3-12.2l14.6 14.6l81.3-81.3c-11.1-11.1-11.2-29.1 0-40.2L382.6 43.21L281.2 144.6l4.6 4.5l-12.3 12.3l-4.5-4.5l-155.8 155.7l-12.2-12.2L370.4 31.03l-9-9.03c-11.2 11.16-29.2 11.08-40.2 0L20.66 322.5c11.08 11.1 11.1 29.1 0 40.2L148 490c11.1-11.1 29.1-11.1 40.2 0zm-57.1-30.1l27 26.9l-17.6 17.6l-26.9-27zm-29.8 29.8l26.9 26.9l-14.4 14.5l-27-27zm-26.7 26.7l26.9 26.9l-11.1 11.1l-26.9-26.9zm-17.3 17.2l27 27l-18.2 18.2l-27-26.9zm-30.4 30.5l26.9 27l-11.2 11.2l-27-27zm6.5 47.4l-17.7 17.7l-26.9-27l17.7-17.7zm121.8-178.9l15.3 15.3l-12.2 12.3l-15.4-15.4zM80.26 396.4l-.74-7.4l26.78.9l21.1-22.3l-36.92-27.7l1.95-9l58.67 11.7l21.6-23c7.3-7.7 17.8-11.2 27.3-9c2.2 9.6-1.2 20.1-8.9 27.4l-23 21.6l11.7 58.6l-9 2l-27.7-36.9l-22.3 21.1l.9 26.8l-7.4-.8l-12.6-21.4zM368.5 202.2l72.5-72.5l12.3 12.3l-72.5 72.5zm-36.8-7.2l15.2 15.3l-12.2 12.3l-15.3-15.3zm97.7-77l-28.9 28.9l-36.7-36.7l28.9-28.89zM222.3 300.3l81.6-81.6l12.2 12.1l-81.6 81.7zm122.1-122.2l33.8-33.7l12.2 12.2l-33.8 33.7zm-24.1-24l33.8-33.8l12.2 12.2l-33.8 33.7zM198.2 276.2l81.6-81.6l12.2 12.2l-81.6 81.6zM301 164.4l15.3 15.3l-12.3 12.2l-15.2-15.2zm-61.1-61.1l15.3 15.2l-12.3 12.3l-15.3-15.3z" data-astro-cid-jyufb5tp></path> </svg> <div class="text-right" data-astro-cid-jyufb5tp> <p class="text-xs font-semibold" data-astro-cid-jyufb5tp>DESTINO</p> <h3 class="text-lg font-bold" data-astro-cid-jyufb5tp>${country}</h3> </div> </div> <div class="flex justify-between items-end" data-astro-cid-jyufb5tp> <div data-astro-cid-jyufb5tp> <p class="text-xs font-semibold" data-astro-cid-jyufb5tp>PASAJEROS</p> <p class="text-sm" data-astro-cid-jyufb5tp>2 (Tú y Yo)</p> </div> <div class="text-right" data-astro-cid-jyufb5tp> <p class="text-xs font-semibold" data-astro-cid-jyufb5tp>ESTADO</p> <p class="text-sm font-bold country-status" data-astro-cid-jyufb5tp>Por visitar</p> </div> </div> <div class="mt-2 text-center" data-astro-cid-jyufb5tp> <p class="text-xs italic country-message" data-astro-cid-jyufb5tp>Haz clic para visitar</p> </div> </div>  `;
}, "G:/romantic-world-tour/src/components/CountryCard.astro", void 0);

const MusicPlayer = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const soundRef = useRef(null);
  const progressRef = useRef(null);
  useEffect(() => {
    if (songs.length > 0) {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      soundRef.current = new Howl({
        src: [songs[currentSong].src],
        html5: true,
        volume,
        onload: () => {
          setDuration(soundRef.current.duration());
          if (isPlaying) {
            soundRef.current.play();
          }
        },
        onend: () => {
          nextSong();
        }
      });
    }
    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [currentSong, songs]);
  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(volume);
    }
  }, [volume]);
  useEffect(() => {
    if (isPlaying) {
      progressRef.current = setInterval(() => {
        setProgress(soundRef.current.seek());
      }, 1e3);
    } else if (progressRef.current) {
      clearInterval(progressRef.current);
    }
    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [isPlaying]);
  const playAudio = () => {
    if (soundRef.current) {
      soundRef.current.play();
      setIsPlaying(true);
    }
  };
  const togglePlay = () => {
    if (soundRef.current.playing()) {
      soundRef.current.pause();
      setIsPlaying(false);
    } else {
      playAudio();
    }
  };
  const nextSong = () => {
    setCurrentSong((prevSong2) => (prevSong2 + 1) % songs.length);
    setProgress(0);
    setIsPlaying(true);
  };
  const prevSong = () => {
    setCurrentSong((prevSong2) => (prevSong2 - 1 + songs.length) % songs.length);
    setProgress(0);
    setIsPlaying(true);
  };
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    soundRef.current.seek(seekTime);
    setProgress(seekTime);
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 text-white p-2 fixed bottom-0 left-0 right-0", children: [
    !hasInteracted && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          setHasInteracted(true);
          playAudio();
        },
        className: "w-full bg-white text-black text-sm rounded-full p-2 shadow-lg mb-2",
        children: "Reproducir Música"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 w-1/3", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: songs[currentSong].cover,
            alt: `Portada de ${songs[currentSong].title}`,
            className: "w-10 h-10 rounded-sm shadow-md"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "truncate", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xs font-semibold truncate", children: songs[currentSong].title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 truncate", children: songs[currentSong].artist })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 w-1/3 justify-center", children: [
        /* @__PURE__ */ jsx("button", { onClick: prevSong, className: "text-gray-400 hover:text-white", "aria-label": "Canción anterior", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" }) }) }),
        /* @__PURE__ */ jsx("button", { onClick: togglePlay, className: "bg-white text-black rounded-full p-1 hover:scale-105 transition-transform", "aria-label": isPlaying ? "Pausar" : "Reproducir", children: isPlaying ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z", clipRule: "evenodd" }) }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z", clipRule: "evenodd" }) }) }),
        /* @__PURE__ */ jsx("button", { onClick: nextSong, className: "text-gray-400 hover:text-white", "aria-label": "Siguiente canción", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798L4.555 5.168z" }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 w-1/3 justify-end", children: [
        /* @__PURE__ */ jsx("button", { className: "text-gray-400 hover:text-white", "aria-label": "Control de volumen", children: volume === 0 ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z", clipRule: "evenodd" }) }) : volume < 0.5 ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h1.536l4.033 3.796A.75.75 0 0010 16.25V3.75zM8.5 5.677V14.323a.25.25 0 01-.421.182l-3.816-3.596A.25.25 0 014.036 10.75H3.417v-1.5h.62a.25.25 0 01.226.147l3.816 3.596a.25.25 0 00.421-.182V5.677zm2.5 6.701a.75.75 0 011.05.15 3.5 3.5 0 000-4.656.75.75 0 01-1.1 1.02 2 2 0 000 2.615.75.75 0 01.05 1.071z", clipRule: "evenodd" }) }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z", clipRule: "evenodd" }) }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: "1",
            step: "0.01",
            value: volume,
            onChange: handleVolumeChange,
            className: "w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer",
            style: {
              background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${volume * 100}%, #4D4D4D ${volume * 100}%, #4D4D4D 100%)`
            },
            "aria-label": "Control de volumen"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "range",
        min: "0",
        max: duration,
        value: progress,
        onChange: handleSeek,
        className: "w-full h-1 mt-2 bg-gray-600 rounded-lg appearance-none cursor-pointer",
        style: {
          background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${progress / duration * 100}%, #4D4D4D ${progress / duration * 100}%, #4D4D4D 100%)`
        }
      }
    )
  ] });
};

const $$ProposalModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="proposalModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden"> <div class="bg-white text-black p-8 rounded-lg text-center"> <h2 class="text-2xl mb-4">¿Quieres ser mi novia?</h2> <div class="flex justify-center space-x-4"> <button id="acceptButton" class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300">
Sí, acepto
</button> <button id="rejectButton" class="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-300">
No, acepto
</button> </div> </div> </div>`;
}, "G:/romantic-world-tour/src/components/ProposalModal.astro", void 0);

const $$AcceptedMessage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="acceptedMessage" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 hidden z-50" data-astro-cid-qb6vvb36> <div class="text-4xl font-bold text-white mb-8 text-center px-4" data-astro-cid-qb6vvb36>
¡Nuestro viaje de amor comienza ahora!
</div> <div class="relative w-64 h-64 mb-8" data-astro-cid-qb6vvb36> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full" data-astro-cid-qb6vvb36> <path fill="#FF4B4B" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" data-astro-cid-qb6vvb36></path> </svg> <div class="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2" data-astro-cid-qb6vvb36> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128" class="w-12 h-12" data-astro-cid-qb6vvb36> <path fill="#757E40" d="M55.88 32.41S17.4 43.11 14.4 47.24S6.23 59.02 5.76 75.4c-.38 13.14 6.95 46.93 42.98 48.05c36.79 1.15 50.49-23.09 57.06-38.1c5.92-13.54 5.82-29.09 9.57-36.23s7.13-13.33 6.95-21.4s-3.19-15.02-8.45-18.4s-9.76-2.82-12.01-3.38s-45.98 26.47-45.98 26.47" data-astro-cid-qb6vvb36></path> <path fill="#AFB42A" d="M62.63 18.9c-15.96 6.57-37.17 12.76-47.3 27.03c-9.15 12.88-12.2 28.9.19 47.67c11.31 17.14 41.46 24.45 64.01 8.26c20.65-14.83 22.52-36.6 28.72-51.06s19.24-33.46 3.57-42.8c-16.71-9.94-36.58 5.71-49.19 10.9" data-astro-cid-qb6vvb36></path> <path fill="#FFF69D" d="M108.25 12.14c-7.59-4.38-17.27-2.44-27.97 2.82s-18.96 9.2-22.71 10.51C53.81 26.78 21.87 38.48 15.71 54c-5.07 12.76-3.75 29.47 9.57 41.67s46.93 11.45 59.88-6.95s13.51-33.22 16.33-39.79s8.96-16.19 10.7-21.4c2.06-6.19.94-12.57-3.94-15.39" data-astro-cid-qb6vvb36></path> <path fill="#855C52" d="M71.45 47.8c-6.01-7.13-28.91-4.88-36.79 6.38s-4.6 20.41-.75 25.34C38.6 85.53 51.37 90.97 63 82.9s15.04-27.28 8.45-35.1" data-astro-cid-qb6vvb36></path> <path fill="#D67659" d="M47.32 60.62c-2.96 4.34-1.48 11.34-6.57 11.67s-8.05-7.84-4.44-14.68c3.9-7.38 13.14-10.67 15.77-7.17c2.64 3.51-1.95 6.06-4.76 10.18" data-astro-cid-qb6vvb36></path> </svg> </div> <div class="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2" data-astro-cid-qb6vvb36> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128" class="w-12 h-12" data-astro-cid-qb6vvb36> <path fill="#757E40" d="M55.88 32.41S17.4 43.11 14.4 47.24S6.23 59.02 5.76 75.4c-.38 13.14 6.95 46.93 42.98 48.05c36.79 1.15 50.49-23.09 57.06-38.1c5.92-13.54 5.82-29.09 9.57-36.23s7.13-13.33 6.95-21.4s-3.19-15.02-8.45-18.4s-9.76-2.82-12.01-3.38s-45.98 26.47-45.98 26.47" data-astro-cid-qb6vvb36></path> <path fill="#AFB42A" d="M62.63 18.9c-15.96 6.57-37.17 12.76-47.3 27.03c-9.15 12.88-12.2 28.9.19 47.67c11.31 17.14 41.46 24.45 64.01 8.26c20.65-14.83 22.52-36.6 28.72-51.06s19.24-33.46 3.57-42.8c-16.71-9.94-36.58 5.71-49.19 10.9" data-astro-cid-qb6vvb36></path> <path fill="#FFF69D" d="M108.25 12.14c-7.59-4.38-17.27-2.44-27.97 2.82s-18.96 9.2-22.71 10.51C53.81 26.78 21.87 38.48 15.71 54c-5.07 12.76-3.75 29.47 9.57 41.67s46.93 11.45 59.88-6.95s13.51-33.22 16.33-39.79s8.96-16.19 10.7-21.4c2.06-6.19.94-12.57-3.94-15.39" data-astro-cid-qb6vvb36></path> <path fill="#855C52" d="M71.45 47.8c-6.01-7.13-28.91-4.88-36.79 6.38s-4.6 20.41-.75 25.34C38.6 85.53 51.37 90.97 63 82.9s15.04-27.28 8.45-35.1" data-astro-cid-qb6vvb36></path> <path fill="#D67659" d="M47.32 60.62c-2.96 4.34-1.48 11.34-6.57 11.67s-8.05-7.84-4.44-14.68c3.9-7.38 13.14-10.67 15.77-7.17c2.64 3.51-1.95 6.06-4.76 10.18" data-astro-cid-qb6vvb36></path> </svg> </div> <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" data-astro-cid-qb6vvb36> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128" class="w-12 h-12" data-astro-cid-qb6vvb36> <path fill="#757E40" d="M55.88 32.41S17.4 43.11 14.4 47.24S6.23 59.02 5.76 75.4c-.38 13.14 6.95 46.93 42.98 48.05c36.79 1.15 50.49-23.09 57.06-38.1c5.92-13.54 5.82-29.09 9.57-36.23s7.13-13.33 6.95-21.4s-3.19-15.02-8.45-18.4s-9.76-2.82-12.01-3.38s-45.98 26.47-45.98 26.47" data-astro-cid-qb6vvb36></path> <path fill="#AFB42A" d="M62.63 18.9c-15.96 6.57-37.17 12.76-47.3 27.03c-9.15 12.88-12.2 28.9.19 47.67c11.31 17.14 41.46 24.45 64.01 8.26c20.65-14.83 22.52-36.6 28.72-51.06s19.24-33.46 3.57-42.8c-16.71-9.94-36.58 5.71-49.19 10.9" data-astro-cid-qb6vvb36></path> <path fill="#FFF69D" d="M108.25 12.14c-7.59-4.38-17.27-2.44-27.97 2.82s-18.96 9.2-22.71 10.51C53.81 26.78 21.87 38.48 15.71 54c-5.07 12.76-3.75 29.47 9.57 41.67s46.93 11.45 59.88-6.95s13.51-33.22 16.33-39.79s8.96-16.19 10.7-21.4c2.06-6.19.94-12.57-3.94-15.39" data-astro-cid-qb6vvb36></path> <path fill="#855C52" d="M71.45 47.8c-6.01-7.13-28.91-4.88-36.79 6.38s-4.6 20.41-.75 25.34C38.6 85.53 51.37 90.97 63 82.9s15.04-27.28 8.45-35.1" data-astro-cid-qb6vvb36></path> <path fill="#D67659" d="M47.32 60.62c-2.96 4.34-1.48 11.34-6.57 11.67s-8.05-7.84-4.44-14.68c3.9-7.38 13.14-10.67 15.77-7.17c2.64 3.51-1.95 6.06-4.76 10.18" data-astro-cid-qb6vvb36></path> </svg> </div> </div> <div class="text-xl text-white mt-8 text-center px-4" data-astro-cid-qb6vvb36>
Juntos, exploraremos el mundo y nuestro amor crecerá con cada aventura.
</div> </div>  `;
}, "G:/romantic-world-tour/src/components/AcceptedMessage.astro", void 0);

const $$RejectedMessage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="rejectedMessage" class="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 hidden"> <div class="text-4xl font-bold text-white mb-8 text-center">
Pues a tomar por culo
</div> <div class="text-9xl">
😢
</div> <div class="text-xl text-white mt-8 text-center">
La página se recargará en 20 segundos...
</div> </div>`;
}, "G:/romantic-world-tour/src/components/RejectedMessage.astro", void 0);

const $$RomanticJourney = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Viaje Rom\xE1ntico Alrededor del Mundo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-black text-white flex flex-col"> <header class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 sticky top-0 z-10"> <div class="flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 576 512" class="text-white mr-2" aria-hidden="true"> <path fill="currentColor" d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64H365.7L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1h-56.2c-10.6 0-18.3-10.2-15.4-20.4l49-171.6H112l-43.2 57.6c-3 4-7.8 6.4-12.8 6.4H14c-7.8 0-14-6.3-14-14c0-1.3.2-2.6.5-3.9L32 256L.5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14h42c5 0 9.8 2.4 12.8 6.4L112 192h102.9l-49-171.6c-3-10.2 4.7-20.4 15.3-20.4h56.2c11.5 0 22.1 6.2 27.8 16.1L365.7 192z"></path> </svg> <h1 class="text-xl md:text-2xl font-bold">Viaje Romántico Alrededor del Mundo</h1> </div> </header> <main class="flex-grow container mx-auto px-4 py-8 pb-32"> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${countries.map((country) => renderTemplate`${renderComponent($$result2, "CountryCard", $$CountryCard, { "country": country, "message": romanticMessages[country] })}`)} </div> <button id="proposalButton" class="fixed bottom-24 right-4 md:right-8 bg-red-500 text-white p-4 rounded-full shadow-lg hidden transition-all duration-300 ease-in-out transform hover:scale-110 z-20" aria-label="Hacer propuesta"> <svg class="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path> </svg> </button> ${renderComponent($$result2, "ProposalModal", $$ProposalModal, {})} ${renderComponent($$result2, "AcceptedMessage", $$AcceptedMessage, {})} ${renderComponent($$result2, "RejectedMessage", $$RejectedMessage, {})} </main> <footer class="mt-auto"> ${renderComponent($$result2, "MusicPlayer", MusicPlayer, { "songs": songs, "client:load": true, "client:component-hydration": "load", "client:component-path": "G:/romantic-world-tour/src/components/MusicPlayer.jsx", "client:component-export": "default" })} </footer> </div> ` })}  `;
}, "G:/romantic-world-tour/src/components/RomanticJourney.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Viaje Rom\xE1ntico Alrededor del Mundo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RomanticJourney", $$RomanticJourney, {})} ` })}`;
}, "G:/romantic-world-tour/src/pages/index.astro", void 0);

const $$file = "G:/romantic-world-tour/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
