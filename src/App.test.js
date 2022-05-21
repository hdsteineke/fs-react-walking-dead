import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Zombie from './Zombie';
import Home from './Home';

test('', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Zombie slurps/i);
  expect(linkElement).toBeInTheDocument();
});


test('specific zombie emoji is rendered based on prop that is passed', () => {
  render(<Zombie zombie='zombie1' />);

  const zombie1Emoji = screen.getByText(/🧟/i);
  expect(zombie1Emoji).toBeInTheDocument();
});


test('when I click Open CDC, I expect to see the word Nope!', () => {
  render(<Home />);

  const openCDCButton = screen.queryByText(/Open CDC/i);

  fireEvent.click(openCDCButton);

  const openedEl = screen.queryByText('Nope!');
  expect(openedEl).toBeInTheDocument();


});



test('when I click Close CDC, I expect to see the words you are on your own', () => {
  render(<Home />);

  const closeCDCButton = screen.queryByText(/Close CDC/i);

  fireEvent.click(closeCDCButton);
  
  const closedEl = screen.queryByText('You are on your own.');
  expect(closedEl).toBeInTheDocument();

});



// test('', () => {
//   render(<ZombieList zombies={['zombie1', 'brain', 'zombie2', 'dumpster', 'fire']}/>);

//   const zombie1Emoji = screen.getAllByText(/🧟/i);
//   expect(zombie1Emoji).toBeInTheDocument();

//   const brainEmoji = screen.getAllByText(/🧠/i);
//   expect(brainEmoji).toBeInTheDocument();

//   const zombie2Emoji = screen.getAllByText(/🧟‍♀️/i);
//   expect(zombie2Emoji).toBeInTheDocument();

//   const dumpsterEmoji = screen.getAllByText(/🗑️/i);
//   expect(dumpsterEmoji).toBeInTheDocument();

//   const fireEmoji = screen.getAllByText(/🔥/i);
//   expect(fireEmoji).toBeInTheDocument();
  
// });



test('specific zombie emoji is rendered based on prop that is passed', () => {
  render(<Zombie zombie='brain' />);

  const brainEmoji = screen.getByText(/🧠/i);
  expect(brainEmoji).toBeInTheDocument();
});

