import { Physics, Debug } from "@react-three/rapier";
import useGame from "./stores/usegame.js";
import Lights from "./Lights.js";
import { Level } from "./level.js";
import Player from "./player.js";
import Effects from "./Effects.js";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  return (
    <>
      <color args={["#252731"]} attach="background" />

      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>

      <Effects />
    </>
  );
}
