import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Languages from '../../api/languages/languages';
import LanguagesList from '../components/LanguagesList';
import Loading from '../components/Loading';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('languages.list');
  if (subscription.ready()) {
    const languages = Languages.find().fetch();
    onData(null, { languages });
  }
};

export default composeWithTracker(composer, Loading)(LanguagesList);
