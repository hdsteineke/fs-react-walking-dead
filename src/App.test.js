import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Zombie from './Zombie';

test('', () => {
  render(<App />);
  const linkElement = screen.getByText(/Zombie slurps/i);
  expect(linkElement).toBeInTheDocument();
});


test('specific zombie emoji is rendered based on prop that is passed', () => {
  render(<Zombie zombie='zombie1' />);

  const zombie1Emoji = screen.getByText(/🧟/i);
  expect(zombie1Emoji).toBeInTheDocument();
});


test('when I click Open CDC, I expect to see the word Nope!', () => {
  render(<App />);

  const openCDCButton = screen.queryByText(/Open CDC/i);

  fireEvent.click(openCDCButton);

  const openedEl = screen.queryByText('Nope!');
  expect(openedEl).toBeInTheDocument();


});



test('when I click Close CDC, I expect to see the words you are on your own', () => {
  render(<App />);

  const closeCDCButton = screen.queryByText(/Close CDC/i);

  fireEvent.click(closeCDCButton);
  
  const closedEl = screen.queryByText('You are on your own.');
  expect(closedEl).toBeInTheDocument();

});







// test('specific zombie emoji is rendered based on prop that is passed', () => {
//   render(<Zombie zombie='zombie1' />);

//   const zombie1Emoji = screen.getByText(/🧠/i);
//   expect(zombie1Emoji).not.toBeInTheDocument();
// });




// test('', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Zombie slurps/i);
//   expect(linkElement).toBeInTheDocument();
// });
  