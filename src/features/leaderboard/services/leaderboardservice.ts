import type { Candidate } from '../types/leaderboard.types';

export const topCandidates: Candidate[] = [
  {
    id: 1,
    rank: 1,
    name: 'Nguyen Van A',
    avatar: 'https://i.pravatar.cc/150?img=1',
    position: 'Backend',
    level: 'Mid',
    score: 95,
  },
  {
    id: 2,
    rank: 2,
    name: 'Tran Van B',
    avatar: 'https://i.pravatar.cc/150?img=2',
    position: 'Frontend',
    level: 'Junior',
    score: 92,
  },
  {
    id: 3,
    rank: 3,
    name: 'Le Van C',
    avatar: 'https://i.pravatar.cc/150?img=3',
    position: 'BA',
    level: 'Senior',
    score: 90,
  },
];

export const leaderboardData: Candidate[] = [
  ...topCandidates,
  {
    id: 4,
    rank: 4,
    name: 'Pham Minh D',
    avatar: 'https://i.pravatar.cc/150?img=4',
    position: 'Backend',
    level: 'Junior',
    score: 88,
  },
];