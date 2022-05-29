"""Project building script."""
import pathlib
from setuptools import setup, find_packages
here = pathlib.Path(__file__).parent.resolve()

# Get the long description from the README file
long_description = (here / "README.md").read_text(encoding="utf-8")

setup(
    name="nodered_automatic_provision",
    # Versions should comply with PEP 440:
    # https://www.python.org/dev/peps/pep-0440/
    version="0.0.1",
    description="A node-red auto provisioning tool",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/noor-latif/nodered-automatic-provision",
    author="Noor Latif",
    package_dir={"": "src"},
    packages=find_packages(where="src"),
    python_requires=">=3.7, <4",
    # This field lists other packages that your project depends on to run.
    # Any package you put here will be installed by pip when your project is
    # installed, so they must be valid existing projects.
    #
    # For an analysis of "install_requires" vs pip's requirements files see:
    # https://packaging.python.org/discussions/install-requires-vs-requirements/
    install_requires=[""],
    project_urls={
        "Bug Reports": "https://github.com/noor-latif/nodered-automatic-provision/issues",
        "Source": "https://github.com/noor-latif/nodered-automatic-provision",
    },
)
