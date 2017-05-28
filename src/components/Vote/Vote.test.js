import React from 'react';
import Vote from './Vote';
import { mount } from 'enzyme';

describe("Vote", () => {
  let mountedVote;

  const vote = () => {
    if(!mountedVote) {
      mount(
        <Vote />
      );
    }
    return mountedVote;
  }

  it("renders a single vote component", () => {
    const vote = mount(<Vote />);
    expect(vote.length).toBe(1);
  });
});
