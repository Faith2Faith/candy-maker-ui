module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('manufacturers', [
      { name: 'August Storck KG', country: 'DE' },
      { name: 'Cadbury', country: 'UK' },
      { name: 'Ferrara Candy Company', country: 'US' },
      { name: 'G.B. Ambrosoli', country: 'IT' },
      { name: 'Impact Confections', country: 'US' },
      { name: 'Mars', country: 'US' },
      { name: 'Nabisco', country: 'US' },
      { name: 'Necco', country: 'US' },
      { name: 'Nestlé', country: 'CH' },
      { name: 'Perfetti Van Melle', country: 'IT' },
      { name: 'Just Born, Inc', country: 'US' },
      { name: 'The Hershey Company', country: 'US' },
      { name: 'The Wrigley Company', country: 'US' },
      { name: 'Tootsie Roll Industries', country: 'US' },
      { name: 'Topps', country: 'US' },
      { name: 'Zeta Espacial S.A.', country: 'ES' },
    ])

    return queryInterface.bulkInsert('products', [
      { name: 'Mamba', yearIntroduced: '1953-01-01', manufacturerId: 1 },
      { name: 'Caramello', yearIntroduced: '1976-01-01', manufacturerId: 2 },
      { name: 'Creme Egg', yearIntroduced: '1923-01-01', manufacturerId: 2 },
      { name: 'Mini Eggs', yearIntroduced: '1967-01-01', manufacturerId: 2 },
      { name: 'Sour Patch Kids', yearIntroduced: '1985-01-01', manufacturerId: 2 },
      { name: 'Atomic FireBalls', yearIntroduced: '1954-01-01', manufacturerId: 3 },
      { name: 'Fruit Stripe', yearIntroduced: '1960-01-01', manufacturerId: 3 },
      { name: 'Laffy Taffy', yearIntroduced: '1970-01-01', manufacturerId: 3 },
      { name: 'Lemon Heads', yearIntroduced: '1962-01-01', manufacturerId: 3 },
      { name: 'Nerds', yearIntroduced: '1983-01-01', manufacturerId: 3 },
      { name: 'Now and Laters', yearIntroduced: '1962-01-01', manufacturerId: 3 },
      { name: 'Spree', yearIntroduced: '1965-01-01', manufacturerId: 3 },
      { name: 'Zots', yearIntroduced: '1968-01-01', manufacturerId: 4 },
      { name: 'Warheads', yearIntroduced: '1975-01-01', manufacturerId: 5 },
      { name: '3 Musketeers', yearIntroduced: '1932-01-01', manufacturerId: 6 },
      { name: 'Bounty', yearIntroduced: '1951-01-01', manufacturerId: 6 },
      { name: 'Almond Joy', yearIntroduced: '1946-01-01', manufacturerId: 12 },
      { name: 'Mounds', yearIntroduced: '1920-01-01', manufacturerId: 12 },
      { name: 'Life Savers', yearIntroduced: '1912-01-01', manufacturerId: 6 },
      { name: 'M&M\'s', yearIntroduced: '1941-01-01', manufacturerId: 6 },
      { name: 'Maltesers', yearIntroduced: '1936-01-01', manufacturerId: 6 },
      { name: 'Milky Way', yearIntroduced: '1923-01-01', manufacturerId: 6 },
      { name: 'PB Max', yearIntroduced: '1989-01-01', manufacturerId: 6 },
      { name: 'Snickers', yearIntroduced: '1930-01-01', manufacturerId: 6 },
      { name: 'Twix', yearIntroduced: '1967-01-01', manufacturerId: 6 },
      { name: 'Bonkers', yearIntroduced: '1985-01-01', manufacturerId: 7 },
      { name: 'Necco Wafers', yearIntroduced: '1847-01-01', manufacturerId: 8 },
      { name: 'Bit-O-Honey', yearIntroduced: '1924-01-01', manufacturerId: 9 },
      { name: 'Bottle Caps', yearIntroduced: '1972-01-01', manufacturerId: 9 },
      { name: 'Nestlé Crunch', yearIntroduced: '1928-01-01', manufacturerId: 9 },
      { name: 'Fun Dip', yearIntroduced: '1973-01-01', manufacturerId: 9 },
      { name: 'Kit Kat', yearIntroduced: '1935-01-01', manufacturerId: 9 },
      { name: 'Pixy Sticks', yearIntroduced: '1952-01-01', manufacturerId: 9 },
      { name: 'Rolo', yearIntroduced: '1937-01-01', manufacturerId: 9 },
      { name: 'Runts', yearIntroduced: '1982-01-01', manufacturerId: 9 },
      { name: 'Smarties', yearIntroduced: '1949-01-01', manufacturerId: 9 },
      { name: 'AirHeads', yearIntroduced: '1985-01-01', manufacturerId: 10 },
      { name: 'Mike and Ikes', yearIntroduced: '1940-01-01', manufacturerId: 11 },
      { name: 'Peeps', yearIntroduced: '1953-01-01', manufacturerId: 11 },
      { name: 'Blow Pops', yearIntroduced: '1988-01-01', manufacturerId: 14 },
      { name: '5th Avenue', yearIntroduced: '1936-01-01', manufacturerId: 12 },
      { name: 'Ice Breakers', yearIntroduced: '1996-01-01', manufacturerId: 12 },
      { name: 'Jolly Ranchers', yearIntroduced: '1949-01-01', manufacturerId: 12 },
      { name: 'Hershey Kisses', yearIntroduced: '1907-01-01', manufacturerId: 12 },
      { name: 'Krackel', yearIntroduced: '1938-01-01', manufacturerId: 12 },
      { name: 'Mr. Goodbar', yearIntroduced: '1925-01-01', manufacturerId: 12 },
      { name: 'Reese\'s Peanut Butter Cups', yearIntroduced: '1928-01-01', manufacturerId: 12 },
      { name: 'Reese\'s Pieces', yearIntroduced: '1977-01-01', manufacturerId: 12 },
      { name: 'Skor', yearIntroduced: '1981-01-01', manufacturerId: 12 },
      { name: 'Twizzlers', yearIntroduced: '1929-01-01', manufacturerId: 12 },
      { name: 'Altoids', yearIntroduced: '1997-01-01', manufacturerId: 13 },
      { name: 'Big League Chew', yearIntroduced: '1980-01-01', manufacturerId: 13 },
      { name: 'Big Red', yearIntroduced: '1975-01-01', manufacturerId: 13 },
      { name: 'Bubble Tape', yearIntroduced: '1988-01-01', manufacturerId: 13 },
      { name: 'Doublemint', yearIntroduced: '1914-01-01', manufacturerId: 13 },
      { name: 'Eclipse', yearIntroduced: '2003-01-01', manufacturerId: 13 },
      { name: 'Extra', yearIntroduced: '1984-01-01', manufacturerId: 13 },
      { name: 'Hubba Bubba', yearIntroduced: '1979-01-01', manufacturerId: 13 },
      { name: 'Juicy Fruit', yearIntroduced: '1893-01-01', manufacturerId: 13 },
      { name: 'Life Savers', yearIntroduced: '1912-01-01', manufacturerId: 13 },
      { name: 'Orbit', yearIntroduced: '1899-01-01', manufacturerId: 13 },
      { name: 'Skittles', yearIntroduced: '1979-01-01', manufacturerId: 13 },
      { name: 'Starburst', yearIntroduced: '1960-01-01', manufacturerId: 13 },
      { name: 'Razzles', yearIntroduced: '1966-01-01', manufacturerId: 14 },
      { name: 'Tootsie Roll', yearIntroduced: '1896-01-01', manufacturerId: 14 },
      { name: 'Bazooka Joe', yearIntroduced: '1947-01-01', manufacturerId: 15 },
      { name: 'Push Pops', yearIntroduced: '1986-01-01', manufacturerId: 15 },
      { name: 'Ring Pops', yearIntroduced: '1978-01-01', manufacturerId: 15 },
      { name: 'Pop Rocks', yearIntroduced: '1956-01-01', manufacturerId: 16 },
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('products')

    return queryInterface.bulkDelete('manufacturers')
  },
}
