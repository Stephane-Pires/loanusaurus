---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection,
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://media.licdn.com/dms/image/C4E03AQGYHdlxjAU8RA/profile-displayphoto-shrink_400_400/0/1653738503174?e=1676505600&v=beta&t=o5gQQrO-wivkFiRSv8r3U1KIx7VUGX9KceMfIt_FRCE',
    name: 'Stéphane Pires',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Stephane-Pires' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/stephane-pires/' },
    ]
  },

    {
    avatar: 'https://media.licdn.com/dms/image/C4D03AQEGK725CmHWyA/profile-displayphoto-shrink_400_400/0/1568727847899?e=1676505600&v=beta&t=gJHfUAmA83AowH_iDZGUAx4aq63wAW01fu3krtvJ1Ao',
    name: 'Marine Figarol',
    title: 'Main assistant',
    links: [
      { icon: 'github', link: 'https://github.com/marinefigarol' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/marinefigarol/' },
    ]
  },
]

const catsistant = [

          {
    avatar: './nina.jpg',
    name: 'Nina',
    title: 'Catsistant',
    links: [
      { icon: 'github', link: 'https://github.com/Stephane-Pires' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/stephane-pires/' },
    ]
  },

      {
    avatar: './mirena.jpg',
    name: 'Mirena',
    title: 'Catsistant',
    links: [
      { icon: 'github', link: 'https://github.com/marinefigarol' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/marinefigarol/' },
    ]
  },


]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      List of awesome people who are or have been involved in this wonderful Loanusaurus
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>List of awesome cats that assisted us</template>
    <template #members>
      <VPTeamMembers :members="catsistant" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
