defmodule HelloWeb.PageController do
  use HelloWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def resume(conn, _params) do
    component_path = "#{File.cwd!()}/assets/js/HelloWorld.js"
    props = %{name: "kord"}

    {:safe, helloWorld} = ReactRender.render(component_path, props)

    render(conn, "resume.html", helloWorldComponent: helloWorld)
  end
end
