MainLayout = React.createClass({
  render() {
    return <div>
      <Nav />
      <main>
        {this.props.content}
      </main>
      <Footer />
    </div>
  }
});