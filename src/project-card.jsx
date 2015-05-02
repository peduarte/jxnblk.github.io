
var React = require('react');
var classnames = require('classnames');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      name: '',
      description: '',
      link: '/',
      backgroundImage: false,
      backgroundSize: false,
      backgroundColor: 'transparent',
      color: 'black',
      customClass: false,
      logo: false,
    }
  },

  renderLogo: function(logo) {
    var width = (this.props.index < 2) ? 96 : 64;
    var height = width;
    if (this.props.logoSvg) {
      var svg = { __html: this.props.logoSvg };
      return ( <div dangerouslySetInnerHTML={svg} /> );
    } else if (!logo) {
      return false;
    } else {
      return (
        <img src={logo}
          width={width}
          height={height}
          className=""
          alt={this.props.name + ' logo'} />
      );
    }
  },

  render: function() {
    var classes = {
      section: classnames(this.props.className, 'flex full-width center'),
      link: classnames(
          this.props.customClass,
          //'border border-thick border-darken-2',
          'flex flex-center',
          'full-width',
          'button button-transparent',
          'px2',
          {
            'py4': (this.props.index < 2),
            'py3': (this.props.index > 1),
          }),
        content: 'full-width',
        title: classnames({
            'h1': (this.props.index < 2),
            'h2': (this.props.index > 2)
          }, 'm0'),
        description: classnames('m0',
          { 'h5': (this.props.index > 2) }),
    };
    var styles = {
      link: {
        color: this.props.color,
        backgroundImage: this.props.backgroundImage,
        backgroundColor: this.props.backgroundColor
      }
    };

    return (
      <section className={classes.section}>
        <a href={this.props.link}
          className={classes.link}
          style={styles.link}>
          <div className={classes.content}>
            {this.renderLogo(this.props.logo)}
            <h1 className={classes.title}>{this.props.name}</h1>
            <p className={classes.description}>{this.props.description}</p>
          </div>
        </a>
      </section>
    )
  }

});
