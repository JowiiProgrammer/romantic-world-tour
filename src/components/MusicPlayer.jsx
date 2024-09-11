import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';

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
        volume: volume,
        onload: () => {
          setDuration(soundRef.current.duration());
          if (isPlaying) {
            soundRef.current.play();
          }
        },
        onend: () => {
          nextSong();
        },
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
      }, 1000);
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
    setCurrentSong((prevSong) => (prevSong + 1) % songs.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSong((prevSong) => (prevSong - 1 + songs.length) % songs.length);
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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-900 text-white p-2 fixed bottom-0 left-0 right-0">
      {!hasInteracted && (
        <button 
          onClick={() => {
            setHasInteracted(true);
            playAudio();
          }}
          className="w-full bg-white text-black text-sm rounded-full p-2 shadow-lg mb-2"
        >
          Reproducir Música
        </button>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 w-1/3">
          <img
            src={songs[currentSong].cover}
            alt={`Portada de ${songs[currentSong].title}`}
            className="w-10 h-10 rounded-sm shadow-md"
          />
          <div className="truncate">
            <h2 className="text-xs font-semibold truncate">{songs[currentSong].title}</h2>
            <p className="text-xs text-gray-400 truncate">{songs[currentSong].artist}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 w-1/3 justify-center">
          <button onClick={prevSong} className="text-gray-400 hover:text-white" aria-label="Canción anterior">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
            </svg>
          </button>
          <button onClick={togglePlay} className="bg-white text-black rounded-full p-1 hover:scale-105 transition-transform" aria-label={isPlaying ? "Pausar" : "Reproducir"}>
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <button onClick={nextSong} className="text-gray-400 hover:text-white" aria-label="Siguiente canción">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798L4.555 5.168z" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center space-x-2 w-1/3 justify-end">
          <button className="text-gray-400 hover:text-white" aria-label="Control de volumen">
            {volume === 0 ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : volume < 0.5 ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h1.536l4.033 3.796A.75.75 0 0010 16.25V3.75zM8.5 5.677V14.323a.25.25 0 01-.421.182l-3.816-3.596A.25.25 0 014.036 10.75H3.417v-1.5h.62a.25.25 0 01.226.147l3.816 3.596a.25.25 0 00.421-.182V5.677zm2.5 6.701a.75.75 0 011.05.15 3.5 3.5 0 000-4.656.75.75 0 01-1.1 1.02 2 2 0 000 2.615.75.75 0 01.05 1.071z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${volume * 100}%, #4D4D4D ${volume * 100}%, #4D4D4D 100%)`,
            }}
            aria-label="Control de volumen"
          />
        </div>
      </div>
      <input
        type="range"
        min="0"
        max={duration}
        value={progress}
        onChange={handleSeek}
        className="w-full h-1 mt-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${(progress / duration) * 100}%, #4D4D4D ${(progress / duration) * 100}%, #4D4D4D 100%)`,
        }}
      />
    </div>
  );
};

export default MusicPlayer;