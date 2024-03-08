const Footer = () => {
  const githubRepo = "https://github.com/Jorgesq9/To-Do-app-Mini-Project";
  return (
    <footer>
      <p>© 2024 Timecraft. All rights reserved.</p>
      <p>
        View the source code on{" "}
        <a href={githubRepo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </footer>
  );
};

export default Footer;
