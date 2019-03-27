// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Fit,
  Deck,
  Heading,
  ListItem,
  List,
  Appear,
  Image,
  Slide,
  Text,
  Notes,
  Code,
  CodePane,
  BlockQuote,
  Fill,
  Layout
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const imagePath = '/assets/images/';

const IMAGES = {
  twitter_icon: `${imagePath}twitter_icon.png`,
  playground_demo: `${imagePath}playground_demo.gif`,
  pic_one: `${imagePath}pic_one.png`,
  pic_two: `${imagePath}pic_two.png`,
  pic_three: `${imagePath}pic_three.png`,
  pic_four: `${imagePath}pic_four.png`
};

const learningItems = [
  'What is GraphQL and its advantages',
  'How to build a GraphQL server',
  'Defining your data types and resolvers',
  'How to build a GraphQL wrapper for any REST API',
  'Building a GraphQL API from the ground up with CRUD capabilities',
  'Building  a realtime GraphQL API',
  'Adding authentication to your API',
  'Optimization techniques both on the client and server(caching, redis, dataloaders)',
  'Schema Stitching and remote schema generation',
  'Consuming GraphQL based API’s on web and mobile clients',
  'And more...'
];

// Require CSS
require('normalize.css');

const listStyle = { listStylePosition: 'outside' };

const Item = ({ fontSize, children, ...rest }) => (
  <ListItem style={{ fontSize }} {...rest}>
    {children}
  </ListItem>
);

const colors = {
  fbblue: '#385899',
  pink: '#DF0082'
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    navyblue: '#171E25',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    pink: '#DF0082'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const GraphQLTag = ({ children, ...rest }) => (
  <span style={{ color: colors.pink }} {...rest}>
    {children}
  </span>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[ 'zoom', 'slide' ]} transitionDuration={500} theme={theme} controls={false}>
        <Slide transition={[ 'zoom' ]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Joe Ng'ethe
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Frontend Engineer @twigafoods
          </Text>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading size={1} fit caps>
            Background
          </Heading>
          <List style={{ ...listStyle }}>
            <Item fontSize="28px">I have a background in design (UI/UX)</Item>
            <Item fontSize="28px">I started writing code for I needed to do a project in school</Item>
            <Item fontSize="28px">
              I write lots of JS code(React & Node{' '}
              <span role="img" aria-label="heart">
                ❤️
              </span>); I have done a bit of PHP and Python
            </Item>
            <Item fontSize="28px">
              Favorite stack at the moment; React, GraphQL & JAM stack (Gatsbyjs{' '}
              <span role="img" aria-label="rocket">
                🚀
              </span>)
            </Item>
            <Item fontSize="28px">I have worked for Agencies, NGO's, Startups and a bit of consulting</Item>
            <Item fontSize="28px">
              I{' '}
              <span role="img" aria-label="heart">
                ❤️
              </span>OSS and I contribute to codesandbox, gatsbyjs, react-testing-library and Reakit
            </Item>
          </List>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading size={1} fit caps>
            House keeping
          </Heading>
          <List style={listStyle}>
            <ListItem>Give us a follow @africansinatra, @graphqlnairobi, #graphQLNairobi</ListItem>
            <ListItem>
              <span role="img" aria-label="wifi">
                📶
              </span>ihub password - fsdhfsj
            </ListItem>
            <ListItem>Share https://spectrum.chat/graphqlnairobi</ListItem>
          </List>
        </Slide>
        <Slide transition={[ 'slide' ]} bgColor="secondary">
          <Heading size={1} fit textColor="primary">
            We will learn...
          </Heading>
          <List style={listStyle}>
            {learningItems.map((item, i) => {
              return (
                <Appear key={i}>
                  <ListItem textColor="primary" style={{ fontSize: '28px' }}>
                    {item}
                  </ListItem>
                </Appear>
              );
            })}
          </List>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading size={1} fit caps>
            What is <GraphQLTag>GraphQL</GraphQLTag>
          </Heading>
          <Appear>
            <Text>A query language for your API</Text>
          </Appear>
          <Notes>
            <List style={listStyle}>
              <ListItem>That's what the "QL" would stand for</ListItem>
              <ListItem>It's different from standard API's that we are used to</ListItem>
              <ListItem>Talk about how we ask for data in REST API</ListItem>
              <ListItem>
                GraphQL is a new API standard that provides a more efficient, powerful and flexible alternative to REST
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide transition={[ 'slide' ]} bgColor="navyblue">
          <div
            style={{
              display: 'grid',
              gridAutoRows: '400px',
              gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))'
            }}
          >
            <div>
              <Image src={IMAGES.pic_one} />
            </div>
            <Appear>
              <div>
                <Image src={IMAGES.pic_two} />
              </div>
            </Appear>
            <Appear>
              <div>
                <Image src={IMAGES.pic_three} />
              </div>
            </Appear>
          </div>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading size={1} fit caps>
            <GraphQLTag>GraphQL</GraphQLTag> in action
          </Heading>
          <Image src={IMAGES.playground_demo} />
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading size={1} fit caps>
            A brife history
          </Heading>
          <List style={listStyle}>
            <ListItem>
              <GraphQLTag>GraphQL</GraphQLTag> was developed internally by{' '}
              <span style={{ color: colors.fbblue }}>Facebook</span> in 2012 before being publicly released in 2015.
            </ListItem>
            <ListItem>
              On 7<sup>th</sup> November 2018, the <GraphQLTag>GraphQL</GraphQLTag> project was moved from Facebook to
              the newly-established <GraphQLTag>GraphQL Foundation</GraphQLTag>, hosted by the non-profit Linux
              Foundation.
            </ListItem>
          </List>
          <Notes>
            <List>
              <ListItem>Facebook first talked about in ReactJS Conf 2015 </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading size={1} fit caps>
            Eleviating some misconception about <GraphQLTag>GraphQL</GraphQLTag>
          </Heading>
          <List style={listStyle}>
            <Appear>
              <ListItem>GraphQL is often confused with being a database technology.</ListItem>
            </Appear>
            <Appear>
              <ListItem>GraphQL is not only used with React applications.</ListItem>
            </Appear>
            <Appear>
              <ListItem>GraphQL servers are only available for Javascript.</ListItem>
            </Appear>
          </List>
          <Notes>
            <List>
              <ListItem>It's database agnostic and it doesn't care where your data comes from</ListItem>
              <ListItem>Mainly GraphQL was first annouced by FB in React conference</ListItem>
              <ListItem>
                GraphQL servers are available for multiple languages, including Haskell, Python, Ruby, Java, C#, Scala,
                Go, Elixir, Erlang, PHP, R, and Clojure.
              </ListItem>
            </List>
          </Notes>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading caps size={1} fit>
            Advantages of using <GraphQLTag>GraphQL</GraphQLTag>
          </Heading>
          <List style={listStyle}>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>Declarative data fetching</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>No over-fetching/under-fetching</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>Build one backend, consume it everywhere</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>Uses one endpoint</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>One mega schema from multiple schemas</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>Good documentation through schema Introspection</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>Strongly typed</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>A growing ecosystem of tools</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>One single source of truth</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading caps size={1} fit>
            Disadvantages of using <GraphQLTag>GraphQL</GraphQLTag>
          </Heading>
          <List style={listStyle}>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>In large applications, queries can become complex</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>Rate limiting</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '24px' }}>Complexity in implementing a cache strategy</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading caps size={1} fit>
            <GraphQLTag>GraphQL</GraphQLTag> alternatives
          </Heading>
          <List style={listStyle}>
            <Appear>
              <ListItem style={{ fontSize: '28px' }}>REST</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '28px' }}>SOAP</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '28px' }}>RPC</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ fontSize: '28px' }}>Falcor</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading caps size={1} fit>
            Who is using <GraphQLTag>GraphQL</GraphQLTag>?
          </Heading>
          <List style={listStyle}>
            <ListItem>Facebook</ListItem>
            <ListItem>Github</ListItem>
            <ListItem>AirBnB</ListItem>
            <ListItem>Netflix</ListItem>
            <ListItem>The New York Times</ListItem>
            <ListItem>Twitter</ListItem>
            <ListItem>Pintrest</ListItem>
            <ListItem>Twiga</ListItem>
            <ListItem>More...</ListItem>
          </List>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading caps size={1} fit>
            What you it takes to build a <GraphQLTag>GraphQL</GraphQLTag> API
          </Heading>
          <List style={listStyle}>
            <Appear>
              <ListItem>
                <Code lang="javascript">typDefs</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Code lang="javascript">Resolvers</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Code lang="javascript">Server</Code>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Heading size={1} fit>
            Type definations <GraphQLTag>(typeDefs)</GraphQLTag>
          </Heading>
          <BlockQuote textAlign="center">
            This describes the type and shape of data we can ask for from our API
          </BlockQuote>
        </Slide>
        <Slide transition={[ 'slide' ]}>
          <Image src={IMAGES.pic_four} alt="sample" width="100%" height="auto" />
        </Slide>
        <Slide transition={['slide']} bgColor='#2A2733'>
          <CodePane lang="javascript" style={{ fontSize: '32px' }} source={PersonType} theme="dark" />
        </Slide>
        <Slide transition={['slide']} bgColor='#2A2733'>
          <CodePane lang="javascript" style={{ fontSize: '32px' }} source={PeopleType} theme="dark" />
        </Slide>
        <Slide transition={['slide']} bgColor='#2A2733'>
          <Heading fit textColor="#fff">Special Query type</Heading>
          <CodePane lang="javascript" style={{ fontSize: '32px' }} source={QueryRootType} theme="dark" />
        </Slide>
        <Slide transition={['slide']} bgColor='#2A2733'>
          <Heading fit textColor="#fff">Passing Parameters</Heading>
          <CodePane lang="javascript" style={{ fontSize: '32px' }} source={FindPersonQuery} theme="dark" />
        </Slide>
        <Slide transition={['slide']} bgColor='#2A2733'>
          <Heading fit textColor="#fff">Other special root types</Heading>
          <List style={listStyle}>
            <Appear>
              <ListItem style={{color: 'white'}}>Mutation type</ListItem>
            </Appear>
            <Appear>
              <ListItem style={{ color: 'white' }}>Subscription type</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor='#2A2733'>
          <Heading fit textColor="#fff">E.g of a Mutation</Heading>
          <CodePane lang="javascript" style={{ fontSize: '30px' }} source={MutationRootTypes} theme="dark" />
        </Slide>
        <Slide transition={['slide']} bgColor='#2A2733'>
          <Heading fit textColor="#fff">E.g of a Subscription</Heading>
          <CodePane lang="javascript" style={{ fontSize: '30px' }} source={SubscriptionType} theme="dark" />
        </Slide>
        <Slide transition={['slide']} bgColor='#2A2733'>
          <Heading fit textColor="#fff">All Root types</Heading>
          <CodePane lang="javascript" style={{ fontSize: '30px' }} source={AllRootTypes} theme="dark" />
        </Slide>
      </Deck>
    );
  }
}

const PersonType = `type person {
  name: String!
  vehicles: [String]
  starShips: [String]
  gender: String
  films: [String]
  species: [String]
}`;

const PeopleType = `type People{
  people: [person]!
}`;

const QueryRootType = `
  type Query {
      people: [person]!
    }
`;

const AllRootTypes = `
  type Query {
    ...
  }
  type Mutation {
    ...
  }

  type Subscription {
    ...
  }
`;

const FindPersonQuery = `
  type Query {
      people: [person]!
      person(id: String!): person ⬅
    }
`;

const MutationRootTypes = `
 type Mutation {
    createPerson(name: String!): Person! # POST
    updateUser(id: ID!, name: String!): Person # PUT
    deleteUser(id: ID!): Person # DELETE
  }
`;

const SubscriptionType = `
  type Comment {
    id: String
    content: String
  }

  type Subscription {
    commentAdded(repoFullName: String!): Comment
  }
`;
