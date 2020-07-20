import React, {FC} from "react";
import styled from 'styled-components'
import {Command} from "../../../../domains/models/command";
import {Grid} from "../../molecules/Grid";
import {Button} from "@material-ui/core";
import Router from "next/router";

type Props = {
  game: Game;
  user: firebase.User;
  command: (command: Command) => {
    execute: () => void;
    executable: () => boolean;
  };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #E1E6EC;
`;

const Board = styled.div`
  width: 320px;
  height: 320px;
  margin: auto;
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  border-radius: 1rem;
  padding: 1rem;
  box-shadow: inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF;
`;

export const PlayingGameBoard: FC<Props> = ({ game, command, user }) => {
  const put = (x, y) => {
    const putCommand = command({ type: 'PutCommand', props: { userId: user.uid, x, y }});
    putCommand.executable() && putCommand.execute();
  };

  return (
    <Wrapper>
      {game.state === 'finished' && <Button onClick={() => Router.push('/')}>試合終了</Button>}
      <Board>
        {game.board.map((rows, x) => rows.map((grid, y) => <Grid onClick={() => put(x, y)} value={grid} key={y + x * 3} />))}
      </Board>
    </Wrapper>
  );
}
