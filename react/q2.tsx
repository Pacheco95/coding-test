export interface JukeboxProps {
  song: string;
  playing?: boolean;
  resume: () => void;
  pause: () => void;
}

const Jukebox = ({ song, playing = true, resume, pause }: JukeboxProps) => {
  const handlePauseAndResume = () => {
    playing ? pause() : resume();
  };

  return (
    <div>
      <p>You are listening to {song}</p>
      <button onClick={handlePauseAndResume}>
        {playing ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default Jukebox;
