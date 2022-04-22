import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Box, Button, Flex, Progress } from '@chakra-ui/react';

const createOptions = (ref) => ({
  container: ref,
  waveColor: '#EFEFEF',
  progressColor: '#BABABA',
  cursorColor: 'red',
  responsive: false,
  height: 30,
  normalize: true,
  partialRender: true,
  width: 100,
  hideScrollbar: false,
  backend: 'MediaElement',
});

const Waveform = ({ url }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [play, setPlay] = useState(false);

  const [isReady, setIsReady] = React.useState(false);
  const [totalTime, setTotalTime] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  useEffect(() => {
    setPlay(false);
    const options = createOptions(waveformRef.current);

    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);
    wavesurfer.current.on('ready', function () {
      console.log('llega aquí');
      setIsReady(true);
      setTotalTime(wavesurfer.current.getDuration());
    });

    wavesurfer.current.on('ready', updateTimer);
    wavesurfer.current.on('audioprocess', updateTimer);
    wavesurfer.current.on('seek', updateTimer);

    function updateTimer() {
      setCurrentTime(wavesurfer.current.getCurrentTime());
    }

    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlay = () => {
    setPlay(!play);
    wavesurfer.current.playPause();
  };

  return (
    <>
      <Flex direction="column">
        <Button onClick={handlePlay} color="black" w="10px" h="10px">
          {play ? 'pause' : 'play'}
        </Button>

        <Box
          overflow="hidden"
          width="200px"
          height="30px"
          id="waveform"
          ref={waveformRef}
          alignSelf="start"
          pr={6}
        >
          <Progress colorScheme="green"></Progress>
        </Box>
      </Flex>
    </>
  );
};

export default Waveform;


{/** 
const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};


const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <Button onClick={toggle}>{playing ? 'Pause' : 'Play'}</Button>
    </div>
  );
};
*/}