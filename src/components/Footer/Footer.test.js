import React from 'react';
import Footer from './Footer';
import { mount } from 'enzyme';

describe("Footer", () => {
  let mountedFoot;
  let props;

  const footer = () => {
    if(!mountedFoot) {
      mountedFoot = mount(
        <Footer {...props}/>
      );
    }
    return mountedFoot;
  }

  it("renders without failing", () => {
    const foot = footer().find("footer");
    expect(foot.length).toBeGreaterThan(0);
  });

  it("has props for footer text", () => {
    const footProps = mount(<Footer footerContent={"Copyright Game Dev Network 2017"} />);
    expect(footProps.props().footerContent).toBe("Copyright Game Dev Network 2017")
  })
});
