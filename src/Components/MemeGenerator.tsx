import React, {FormEvent, ReactElement} from 'react';

interface State {
  topText: string,
  bottomText: string,
  randomImg: string,
  allMemeImages: Image[]
}

interface Image {
  url: string
}

class MemeGenerator extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: []
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const {memes} = response.data
      console.log(memes[0])
      this.setState({allMemeImages: memes})
    })
  }

  handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
    const randMemeImg = this.state.allMemeImages[randNum].url
    this.setState({randomImg: randMemeImg})
  }

  render(): ReactElement {
    return (
        <div>
          <form className="meme-form">
            <input
                type="text"
                name="topText"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={(event) => this.setState({topText: event.target.value})}
            />
            <input
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={(event) => this.setState({bottomText: event.target.value})}
            />
            <button onClick={event => this.handleSubmit(event)}>Gen</button>
          </form>
          <div className="meme">
            <img src={this.state.randomImg} alt=""/>
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
        </div>
    )
  }
}

export default MemeGenerator;
