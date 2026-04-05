# Add Computer Basic Skills Course

## Goal
Integrate a new course "Computer Basic Skills" into the platform, making it accessible via Browse, viewable in SessionDetail, and having its own assessment in Assessment.

## Steps
1.  **Centralize Data**: Create `src/data/sessions.ts` to store course information, outcomes, and assessment questions.
2.  **Add Course Data**: Include "Computer Basic Skills" with its metadata, video URL (placeholder), outcomes, and quiz.
3.  **Update Pages**:
    - `src/pages/Browse.tsx`: Update to use `src/data/sessions.ts` instead of local mock data.
    - `src/pages/SessionDetail.tsx`: Refactor to dynamically display data based on `sessionId`.
    - `src/pages/Assessment.tsx`: Refactor to dynamically load quiz questions based on `sessionId`.
4.  **Verification**: 
    - Verify "Computer Basic Skills" appears in the Browse list.
    - Verify clicking it opens the correct SessionDetail page with its unique content.
    - Verify starting the assessment loads the "Computer Basic Skills" specific questions.
