import Button from './components/Button';

function App() {
  return (
    <div>
      <div>
        <Button secondary rounded>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button>
          Button zonder props!
        </Button>
      </div>
    </div>
  );
}

export default App;
