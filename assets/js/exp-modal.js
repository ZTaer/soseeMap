ReactModal.setAppElement('#main');

class ExampleApp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
  }
  
  handleOpenModal = ()=> {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = ()=> {
    this.setState({ showModal: false });
  }
  
  render () {
    return React.createElement( 'div', {}, React.createElement( 'h2', { className: 'text-light display-2' } ), 'React.createElement()函数可以嵌套使用' );
  }
}

const props = {};

ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))