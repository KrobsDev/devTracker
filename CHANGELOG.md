# CHANGELOG 

## [0.0.1] - 11-03-2026

### Added
- Added `projects` and `tasks` apps
- Added `CHANGELOG.md`
- Added `.gitignore`
- Added `Project` model
- Added `Task` model
- Registered the `Project` and `Task` models in admin
- Added `ProjectSerializer` and `TaskSerializer`
- Added  `ProjectViewSet` and `TaskViewSet`
- Added pagination
- Added api endpoints for both `projects` and `tasks`
- Added api test cases for both `projects` and `tasks`
- Added frontend directory
- Setup shadcn on the frontend
- Added react router
- Added sidebar component
- Setup dashboard layout component
- Setup sidebar component
- Added entry point route to the router setup
- Added `ProjectCard` component
- Finished the UI for the dashboard screen

### Changed
- Updated the `ProjectAdmin` to better display the projects in the admin panel
- Moved all choices to `constants.py`
- Updated the choices for task status
- Updated the  get_queryset method to return tasks by project
- Renamed `DashboardLayout` to `AppLayout`

### Fixed
- Resolved the constants import error

## [Setup]
- Setup project
- Installed django and django rest frameworks


