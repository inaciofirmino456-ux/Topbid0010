import { Listing, ActivityEvent } from '../types';

/**
 * TopBid starts empty.
 *
 * Do not seed the public leaderboard with fictional people, companies,
 * bids, clicks or activity. Real listings are added when real clients
 * submit/claim their products.
 */
export const INITIAL_LISTINGS: Listing[] = [];

export const INITIAL_ACTIVITIES: ActivityEvent[] = [];
