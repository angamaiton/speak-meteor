import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import Languages from '../../api/languages/languages';

if (!Meteor.isProduction) {
  const users = [{
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: { first: 'Carl', last: 'Winslow' },
    },
    roles: ['admin'],
  }];

  const languages = [
    { name: 'French', description: 'test', ancestorLanguage: 'Proto-Indo-European' },
    { name: 'Italian', description: 'test again', ancestorLanguage: 'Proto-Indo-European' },
  ];

  users.forEach(({ email, password, profile, roles }) => {
    const userExists = Meteor.users.findOne({ 'emails.address': email });

    if (!userExists) {
      const userId = Accounts.createUser({ email, password, profile });
      Roles.addUsersToRoles(userId, roles);
    }
  });

  languages.forEach((language) => {
    const langExists = Languages.findOne({ name: language.name });

    if (!langExists) {
      Languages.insert(language);
    }
  });
}
