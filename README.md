# Parliament Listening (แอบฟังเสียงรัฐสภา)

## Setup
**Requirements** NodeJS v11.4.0 or above.

```
$ npm install 
```

## Development
```
$ npm run develop
```

### How to Release
1. Bump version `npm version [major|minor|...]`
2. Git push `git push && git push --tags`
3. Deploy `npm run build-and-deploy` to ELECT's gitlab.
4. Ping P'Tai in Slack

### Build Environments
| Name | URL |
|---|---|
| Staging | https://kind-bardeen-92630a.netlify.com |

## Datasets (WIP)
| Date | Status | Links |
|---|---|---|
| 25-07-2019 | Completed |  [![Raw Data][sheet-badge]](https://docs.google.com/spreadsheets/d/1058PcZHySzumcATrGdv0fBVEyrfbhrOGnLhaMC7wYt0/edit#gid=432547432) [![Data Preparation][data-prep-badge]](https://colab.research.google.com/drive/12cejltipBUCh4c61OC9KH7B1MyftMEOM) |
| 26-07-2019 | In progress | [![Raw Data][sheet-badge]](https://docs.google.com/spreadsheets/d/1058PcZHySzumcATrGdv0fBVEyrfbhrOGnLhaMC7wYt0/edit#gid=432547432) |

## Future developments
- Use machine learning algorithms to automatically identify speakers in each part of meetings. From what I see, this scenario is probably a [Blind Source Separation][bss] problem. Hence, we might start with [Independent Component Analysis (ICA)][ica].

## Potential Downstream Applications
Apart from being a tool that provides an efficient way to listen to parliament meetings, its datasets are also valuable. These datasets could results in several applications including:
1. **Performance metric** of each member of parliament (MP). Althought it's a rough estimation, having this metric would allow people to see how their representatives perform.
2. Inspired by the famous online game [Fantasy Football][fantasy-premiere], we could build **Fantasy Politics** in which people will play by picking a squad of politicians before next meeting. How members in the squad participate in the meeting will result scores that the player will receive after the meeting.
3. Inspired by music streaming services, i.e. Spotify or Fungjai,  we could have a similar platform, **Fungkai Dee**, offering  tracks of politicians talking in parliament meetings.


## Acknowledgements
- This projects was bootstrapped with [Gatsby][gatsby].

[gatsby]: https://www.gatsbyjs.org
[data-prep-badge]: https://img.shields.io/badge/-Data%20Preparation-brightgreen
[sheet-badge]: https://img.shields.io/badge/-Raw%20Data-brightgreen
[fantasy-premiere]: https://fantasy.premierleague.com
[ica]: https://en.wikipedia.org/wiki/Independent_component_analysis
[bss]: https://en.wikipedia.org/wiki/Signal_separation

## License

The code is licensed under the [MIT License](./LICENSE) ![MIT License](https://img.shields.io/github/license/codeforthailand/parliament-listening?style=flat-square)

Data is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0) ![CC-BY-SA 4.0 International License](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)
