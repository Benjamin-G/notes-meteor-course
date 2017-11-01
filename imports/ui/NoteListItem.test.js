import { Meteor } from 'meteor/meteor'
import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'

import NoteListItem from './NoteListItem'

if(Meteor.isClient) {
  describe('NoteListItem', function () {
    it('should render title', function(){
      const title = 'test title'
      const updatedAt = '1509481005046'
      const wrapper = mount( <NoteListItem note={{ title , updatedAt }}/> )

      expect(wrapper.find('h5').text()).toBe(title)
    })

    it('should render default with an empty title', function(){
      const title = ''
      const updatedAt = ''
      const wrapper = mount( <NoteListItem note={{ title , updatedAt }}/> )

      expect(wrapper.find('h5').text()).toBe('Untitled note')
    })
  })
}
