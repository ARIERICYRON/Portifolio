import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import fallbackProjects from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const GITHUB_USERNAME = "ARIERICYRON";
const MAX_REPOS = 6;

// Always shown first, in this order, regardless of stars/activity.
// GitHub's language API only detects programming languages, not
// frameworks - so the tech list here is read by hand from each repo's
// README rather than derived automatically.
const PINNED_REPOS = [
  {
    owner: "ARIERICYRON",
    repo: "Portifolio",
    languages: ["React", "JavaScript", "Styled Components", "Bootstrap"],
  },
  {
    owner: "DennohKim",
    repo: "Tastebite-Recipe-App",
    languages: ["React", "TailwindCSS", "Ruby on Rails"],
  },
];

const TECH_ICONS = {
  JavaScript: "logos-javascript",
  TypeScript: "logos-typescript",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  Python: "logos-python",
  Ruby: "logos-ruby",
  Java: "logos-java",
  "Jupyter Notebook": "logos-jupyter",
  Shell: "logos-bash",
  Go: "logos-go",
  PHP: "logos-php",
  React: "logos-react",
  "Styled Components": "simple-icons:styledcomponents",
  Bootstrap: "logos-bootstrap",
  TailwindCSS: "logos-tailwindcss-icon",
  "Ruby on Rails": "logos-rails",
};

function toIcon(name) {
  return { name, iconifyClass: TECH_ICONS[name] || "logos-github-icon" };
}

function mapRepo(repo, overrideLanguages) {
  return {
    id: repo.id,
    name: repo.name,
    createdAt: repo.created_at,
    url: repo.html_url,
    description: repo.description || "",
    languages: overrideLanguages
      ? overrideLanguages.map(toIcon)
      : repo.language
        ? [toIcon(repo.language)]
        : [],
  };
}

function fetchDetectedLanguages(owner, repoName) {
  return fetch(`https://api.github.com/repos/${owner}/${repoName}/languages`)
    .then((res) => (res.ok ? res.json() : {}))
    .then((bytesByLanguage) =>
      Object.keys(bytesByLanguage)
        .sort((a, b) => bytesByLanguage[b] - bytesByLanguage[a])
        .slice(0, 4),
    )
    .catch(() => []);
}

export default function Projects({ theme, onToggle }) {
  const [repos, setRepos] = useState(fallbackProjects.data);

  useEffect(() => {
    let cancelled = false;

    const pinnedRequests = Promise.all(
      PINNED_REPOS.map((p) =>
        fetch(`https://api.github.com/repos/${p.owner}/${p.repo}`).then(
          (res) => (res.ok ? res.json() : null),
        ),
      ),
    );
    const ownRequest = fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
    ).then((res) => (res.ok ? res.json() : null));

    Promise.all([pinnedRequests, ownRequest])
      .then(async ([pinnedResults, ownRepos]) => {
        if (cancelled) return;

        const pinned = pinnedResults.map((repo, i) =>
          repo ? mapRepo(repo, PINNED_REPOS[i].languages) : null,
        );
        const pinnedIds = new Set(
          pinned.filter(Boolean).map((repo) => repo.id),
        );

        const restRepos = Array.isArray(ownRepos)
          ? ownRepos
              .filter((repo) => !repo.fork && !pinnedIds.has(repo.id))
              .sort(
                (a, b) =>
                  b.stargazers_count - a.stargazers_count ||
                  new Date(b.pushed_at) - new Date(a.pushed_at),
              )
              .slice(0, MAX_REPOS - pinned.filter(Boolean).length)
          : [];

        const rest = await Promise.all(
          restRepos.map((repo) =>
            fetchDetectedLanguages(GITHUB_USERNAME, repo.name).then(
              (detected) => mapRepo(repo, detected),
            ),
          ),
        );

        if (cancelled) return;
        const combined = [...pinned.filter(Boolean), ...rest].slice(
          0,
          MAX_REPOS,
        );
        if (combined.length > 0) setRepos(combined);
      })
      .catch(() => {
        // Keep the static fallback if the live fetch fails (rate limit, offline, etc.)
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {repos.map((repo) => {
          return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />

      {/* Publications  */}
      {publications.data.length > 0 ? (
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
      ) : null}

      <div className="repo-cards-div-main">
        {publications.data.map((pub) => {
          return <PublicationCard pub={pub} theme={theme} key={pub.id} />;
        })}
      </div>

      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}
