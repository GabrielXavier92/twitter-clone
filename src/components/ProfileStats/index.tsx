import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

export interface IProfileStats {
  tweets?: string | number;
  followers?: string | number;
  following?: string | number;
}

const ProfileStatsStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const statStyle = theme('mode', {
  light: css`
    border-right: 1px solid ${(props) => props.theme.profileStats.dividerColor};
  `,
  dark: css``,
});

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: ${(props) => props.theme.spacers.spacer3};
  ${statStyle}
`;

const NameStat = styled.span`
  color: ${(props) => props.theme.fonts.greyColor};
  font-size: ${(props) => props.theme.fonts.description};
  margin-bottom: ${(props) => props.theme.spacers.spacer3};
`;

const ProfileStats: React.FC<IProfileStats> = ({ tweets = 0, followers = 0, following = 0 }) => (
  <ProfileStatsStyle>
    <Stat>
      <NameStat>Tweets</NameStat>
      <span>{tweets}</span>
    </Stat>
    <Stat>
      <NameStat>Tweets</NameStat>
      <span>{followers}</span>
    </Stat>
    <Stat style={{ border: 'none' }}>
      <NameStat>Tweets</NameStat>
      <span>{following}</span>
    </Stat>
  </ProfileStatsStyle>
);
export default ProfileStats;
