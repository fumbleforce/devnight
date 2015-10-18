MainLayout = React.createClass({
  render() {
    return <div className="viewport">
      <Nav />
      <main>
        {this.props.content}
      </main>
      <Footer />
    </div>
  }
});