import { Given, Then } from 'cucumber'
import expect from 'expect'
import SwapiService from '../services/swapi'
import { People } from '../types/people'

const people: People = {}

Given('User {string} and make request', async (id: string) => {
  const { data } = await SwapiService.getPeople(id)
  people.name = data.name
})

Then('I should have {string}', (name: string) => {
  expect(people.name).toBe(name)
})
