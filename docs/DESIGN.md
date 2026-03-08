# Phase 3: Documentation (Defend Your Code)

## Why did you reference Songs in the Playlist instead of embedding them?
Referencing Songs in the Playlist schema ensures flexibility and scalability. If songs were embedded directly inside each playlist document, the same song would be duplicated across multiple playlists, leading to data redundancy and higher storage costs. By referencing, each playlist simply stores the IDs of songs, while the actual song data remains centralized in the `Song` collection. This approach:
- Promotes **data consistency** (a song update automatically reflects in all playlists).
- Reduces **duplication** and keeps documents lightweight.
- Makes it easier to **query and populate** playlists with song details only when needed.

## Why did you reference the Artist in the Song model?
Referencing the Artist in the Song schema allows songs to be linked to their creator without embedding full artist details inside every song document. Embedding would cause repeated storage of the same artist information across thousands of songs. By referencing:
- We maintain a **normalized structure** where artist data lives in one place (`Artist` collection).
- Updates to artist information (e.g., name change, genre update) automatically apply to all songs.
- Queries remain efficient, since we can populate artist details only when required, avoiding unnecessary payloads.

---

### ✅ Summary
- **Playlists reference Songs** → avoids duplication, keeps playlists lean, ensures consistency.  
- **Songs reference Artists** → centralizes artist data, simplifies updates, supports efficient queries.  