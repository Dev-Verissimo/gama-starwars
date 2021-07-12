import homeSectionThree from '../../components/sections/homeSectionThree';

let Jedi = {
  is_private: false,

  render: async () => {
    let view = `
          <div>            
            ${homeSectionThree}
          </div>
      `;

    return view
  },

  after_render: async () => { }
}

export default Jedi;