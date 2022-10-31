/*
* The problem is the callback function onButtonClick won't have access
* to MyPane attributes like `this.props` and `this.state`
* */

/*
* Solution 1: bind the callback to the instance
* */

class MyPane extends React.Component {
  constructor(props) {
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick() {
    // do stuff
  }

  render() {
    return <Button onClick={this.onButtonClick}>Click Me</Button>
  }
}

/*
* Solution 2: use ES2022 class properties
* */

class MyPane extends React.Component {
  constructor(props) {
    super(props)
  }

  onButtonClick = () => {
    // do stuff
  }

  render() {
    return <Button onClick={this.onButtonClick}>Click Me</Button>
  }
}