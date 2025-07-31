import { Auth0Provider, useAuth0, User } from '@auth0/auth0-react';
import React, { useState } from 'react';

const domain = "dev-fckvc4f87mukip3n.us.auth0.com";
const clientId = "e8jznzuqtUtHvPIhAVJnN6QWx1MdhbXp";

// Mock data for assigned sets and projects
const mockSets = [
  {
    setId: 1,
    projects: [
      { id: 101, title: 'Smart Bin', team: 'Team Alpha', url: 'https://github.com/teamalpha/smartbin' },
      { id: 102, title: 'Health Tracker', team: 'Team Beta', url: 'https://github.com/teambeta/healthtracker' },
      { id: 103, title: 'Campus Connect', team: 'Team Gamma', url: 'https://github.com/teamgamma/campusconnect' },
      { id: 104, title: 'EcoCart', team: 'Team Delta', url: 'https://github.com/teamdelta/ecocart' },
      { id: 105, title: 'QuickQueue', team: 'Team Epsilon', url: 'https://github.com/teamepsilon/quickqueue' },
    ],
  },
];

type JudgeUser = User & {
  'https://your-app.com/roles'?: string[];
  roles?: string[];
};

type ScoresState = {
  [setId: number]: {
    first?: string;
    second?: string;
    third?: string;
  };
};

function hasJudgeRole(user: JudgeUser | undefined): boolean {
  const roles = user && (user["https://your-app.com/roles"] || user["roles"]);
  return !!roles && roles.some(role => role.toLowerCase() === 'judge');
}

function JudgePortalContent() {
  const { loginWithRedirect, isAuthenticated, isLoading, user, logout } = useAuth0();
  const [scores, setScores] = useState<ScoresState>({});
  const [submitted, setSubmitted] = useState(false);

  // Debug: Print the user object to the console
  console.log('AUTH0 USER:', user);

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#020116] text-white">
        <div className="w-full max-w-md bg-[#18122B] rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-light text-center mb-6">Judge Portal Login</h2>
          <p className="text-center mb-8 text-gray-300">
            Please log in or sign up to access the judging portal.
          </p>
          <button
            className="w-full py-3 rounded bg-[#eb5424] hover:bg-[#cf481e] text-white text-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-md mb-4"
            onClick={() => loginWithRedirect()}
          >
            {/* Auth0 logo SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#fff"/>
              <path d="M12 2L14.09 8.26H20.18L15.54 12.14L17.63 18.4L12 14.52L6.37 18.4L8.46 12.14L3.82 8.26H9.91L12 2Z" fill="#eb5424"/>
            </svg>
            Login / Sign Up with Auth0
          </button>
        </div>
      </div>
    );
  }
  if (!hasJudgeRole(user as JudgeUser)) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#020116] text-white">
        <div className="w-full max-w-md bg-[#18122B] rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-light text-center mb-6">Access Denied</h2>
          <p className="text-center mb-8 text-gray-300">You do not have judge access.</p>
          <button
            className="w-full py-2 rounded bg-gray-700 hover:bg-gray-800 transition-colors"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin + "/2025/Judge_Login" } })}
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (setId: number, rank: 'first' | 'second' | 'third', projectId: string) => {
    setScores((prev) => ({
      ...prev,
      [setId]: {
        ...prev[setId],
        [rank]: projectId,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Send scores to backend
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#020116] text-white">
      <div className="w-full max-w-2xl bg-[#18122B] rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-light text-center mb-6">Judge Portal</h2>
        <p className="text-center mb-8 text-gray-300">Welcome, {user?.name || user?.email}!</p>
        <button
          className="w-full py-2 rounded bg-gray-700 hover:bg-gray-800 transition-colors mb-8"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin + "/2025/Judge_Login" } })}
        >
          Log Out
        </button>
        {submitted ? (
          <div className="text-center text-green-400 text-xl">Thank you! Your scores have been submitted.</div>
        ) : (
          mockSets.map((set) => (
            <form key={set.setId} onSubmit={handleSubmit} className="mb-8">
              <h3 className="text-xl mb-4">Assigned Set #{set.setId}</h3>
              <ul className="mb-4">
                {set.projects.map((project) => (
                  <li key={project.id} className="mb-2 p-2 bg-[#251B3A] rounded">
                    <span className="font-semibold">{project.title}</span> by {project.team} &mdash;{' '}
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">View Project</a>
                  </li>
                ))}
              </ul>
              <div className="mb-4">
                <label className="block mb-1">First Choice:</label>
                <select
                  className="w-full p-2 rounded bg-[#251B3A] text-white border border-gray-700"
                  required
                  value={scores[set.setId]?.first || ''}
                  onChange={e => handleChange(set.setId, 'first', e.target.value)}
                >
                  <option value="" disabled>Select a project</option>
                  {set.projects.map((project) => (
                    <option key={project.id} value={project.id.toString()}>{project.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Second Choice:</label>
                <select
                  className="w-full p-2 rounded bg-[#251B3A] text-white border border-gray-700"
                  required
                  value={scores[set.setId]?.second || ''}
                  onChange={e => handleChange(set.setId, 'second', e.target.value)}
                >
                  <option value="" disabled>Select a project</option>
                  {set.projects.map((project) => (
                    <option key={project.id} value={project.id.toString()}>{project.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-1">Third Choice:</label>
                <select
                  className="w-full p-2 rounded bg-[#251B3A] text-white border border-gray-700"
                  required
                  value={scores[set.setId]?.third || ''}
                  onChange={e => handleChange(set.setId, 'third', e.target.value)}
                >
                  <option value="" disabled>Select a project</option>
                  {set.projects.map((project) => (
                    <option key={project.id} value={project.id.toString()}>{project.title}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full py-2 rounded bg-purple-700 hover:bg-purple-800 transition-colors">Submit Scores</button>
            </form>
          ))
        )}
      </div>
    </div>
  );
}

export default function JudgeAuthPage() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: typeof window !== "undefined" ? window.location.origin + "/2025/Judge_Login" : "",
      }}
    >
      <JudgePortalContent />
    </Auth0Provider>
  );
}

